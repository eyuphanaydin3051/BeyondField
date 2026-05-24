"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMatches = listMatches;
exports.createMatch = createMatch;
exports.deleteMatch = deleteMatch;
exports.setMatchStatus = setMatchStatus;
exports.recordEvent = recordEvent;
exports.undoLastEvent = undoLastEvent;
exports.archivePoint = archivePoint;
exports.updateMatch = updateMatch;
exports.getMatchDetail = getMatchDetail;
const prisma_1 = require("../lib/prisma");
const matchRepository = __importStar(require("../repositories/matchRepository"));
const teamAuthorization_1 = require("./teamAuthorization");
function err(status, message) {
    const e = new Error(message);
    e.statusCode = status;
    return e;
}
function parseDate(value, field) {
    const d = new Date(value);
    if (Number.isNaN(d.getTime()))
        throw err(400, `${field} is not a valid date`);
    return d;
}
async function listMatches(teamId, userId) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    return matchRepository.findMatchesByTeam(teamId);
}
async function createMatch(teamId, userId, input) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    if (!input.homeTeamId)
        throw err(400, 'homeTeamId is required');
    if (input.homeTeamId !== teamId)
        throw err(400, 'homeTeamId must match the path teamId');
    const hasRegisteredOpponent = Boolean(input.awayTeamId);
    const hasExternalOpponent = Boolean(input.opponentName?.trim());
    if (!hasRegisteredOpponent && !hasExternalOpponent) {
        throw err(400, 'Either awayTeamId or opponentName is required');
    }
    if (hasRegisteredOpponent && hasExternalOpponent) {
        throw err(400, 'Provide either awayTeamId or opponentName, not both');
    }
    if (hasRegisteredOpponent) {
        if (input.awayTeamId === input.homeTeamId) {
            throw err(400, 'homeTeamId and awayTeamId must differ');
        }
        await (0, teamAuthorization_1.assertTeamOwnership)(input.awayTeamId, userId);
    }
    if (input.tournamentId) {
        const tournament = await (0, teamAuthorization_1.assertTournamentOwnership)(input.tournamentId, userId);
        if (tournament.ownerTeamId !== teamId) {
            throw err(400, 'Tournament does not belong to this team');
        }
    }
    if (!input.matchDate)
        throw err(400, 'matchDate is required');
    return matchRepository.createMatch({
        homeTeamId: input.homeTeamId,
        awayTeamId: hasRegisteredOpponent ? input.awayTeamId : null,
        opponentName: hasExternalOpponent ? input.opponentName.trim() : null,
        tournamentId: input.tournamentId ?? null,
        matchDate: parseDate(input.matchDate, 'matchDate'),
    });
}
async function deleteMatch(matchId, userId) {
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    return matchRepository.deleteMatch(matchId);
}
// ---------------------------------------------------------------------------
// Status helpers
// ---------------------------------------------------------------------------
async function setMatchStatus(matchId, userId, status) {
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const finished = status === 'FINISHED';
    const match = await matchRepository.updateMatchStatus(matchId, status, finished);
    if (finished) {
        // Increment matchesPlayed for every player who appeared in this match
        const participants = await prisma_1.prisma.matchPlayerStat.findMany({
            where: { matchId },
            select: { playerId: true },
        });
        const tournamentId = match.tournamentId ?? null;
        await prisma_1.prisma.$transaction(participants.map(({ playerId }) => prisma_1.prisma.frisbeePlayerStat.upsert({
            where: { playerId },
            create: { playerId, matchesPlayed: 1 },
            update: { matchesPlayed: { increment: 1 } },
        })));
        if (tournamentId) {
            await prisma_1.prisma.$transaction(participants.map(({ playerId }) => prisma_1.prisma.tournamentPlayerStat.upsert({
                where: { tournamentId_playerId: { tournamentId, playerId } },
                create: { tournamentId, playerId, matchesPlayed: 1 },
                update: { matchesPlayed: { increment: 1 } },
            })));
        }
    }
    return match;
}
/** Returns stat increment deltas for a given actionType. */
function getStatDeltas(actionType) {
    switch (actionType) {
        case 'GOAL': return { goals: 1 };
        case 'ASSIST': return { assists: 1 };
        case 'COMPLETION': return { completions: 1, successfulPasses: 1 };
        case 'BLOCK': return { blocks: 1 };
        case 'CALLAHAN': return { blocks: 1, callahans: 1, goals: 1 };
        case 'DROP': return { drops: 1 };
        case 'THROWAWAY': return { throwaways: 1 };
        case 'PULL_SUCCESS': return { pullAttempts: 1, successfulPulls: 1 };
        case 'PULL_FAIL': return { pullAttempts: 1 };
        default: return {};
    }
}
function buildIncrements(deltas) {
    return Object.fromEntries(Object.entries(deltas).map(([k, v]) => [k, { increment: v }]));
}
function buildDecrements(deltas) {
    return Object.fromEntries(Object.entries(deltas).map(([k, v]) => [k, { decrement: v }]));
}
const VALID_ACTION_TYPES = [
    'GOAL', 'ASSIST', 'BLOCK', 'THROWAWAY', 'DROP', 'CALLAHAN',
    'DEFENSE', 'COMPLETION', 'OPPONENT_GOAL', 'SUBSTITUTION',
    'PULL_SUCCESS', 'PULL_FAIL', 'TIMEOUT_START', 'POINT_START', 'POINT_END',
];
async function recordEvent(matchId, userId, input) {
    if (!input.playerId)
        throw err(400, 'playerId is required');
    if (!input.actionType)
        throw err(400, 'actionType is required');
    if (!VALID_ACTION_TYPES.includes(input.actionType)) {
        throw err(400, `Invalid actionType: ${input.actionType}`);
    }
    if (typeof input.minute !== 'number')
        throw err(400, 'minute is required');
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const match = await prisma_1.prisma.match.findUnique({ where: { id: matchId } });
    if (!match)
        throw err(404, 'Match not found');
    const player = await prisma_1.prisma.player.findUnique({
        where: { id: input.playerId },
        select: { id: true, teamId: true },
    });
    if (!player)
        throw err(404, 'Player not found');
    const deltas = getStatDeltas(input.actionType);
    const hasDeltas = Object.keys(deltas).length > 0;
    await prisma_1.prisma.$transaction(async (tx) => {
        // 1. Persist raw event
        await tx.frisbeeMatchEvent.create({
            data: {
                matchId,
                playerId: input.playerId,
                secondaryPlayerId: input.secondaryPlayerId ?? null,
                actionType: input.actionType,
                minute: input.minute,
                videoTimestampSeconds: input.videoTimestampSeconds ?? null,
                period: input.period ?? null,
                scoreUsAtEvent: input.scoreUsAtEvent ?? null,
                scoreThemAtEvent: input.scoreThemAtEvent ?? null,
            },
        });
        if (hasDeltas) {
            // 2. Career stats (FrisbeePlayerStat — unique on playerId)
            await tx.frisbeePlayerStat.upsert({
                where: { playerId: input.playerId },
                create: { playerId: input.playerId, ...deltas },
                update: buildIncrements(deltas),
            });
            // 3. Per-match stats
            await tx.matchPlayerStat.upsert({
                where: { matchId_playerId: { matchId, playerId: input.playerId } },
                create: { matchId, playerId: input.playerId, ...deltas },
                update: buildIncrements(deltas),
            });
            // 4. Per-tournament stats
            if (match.tournamentId) {
                await tx.tournamentPlayerStat.upsert({
                    where: {
                        tournamentId_playerId: {
                            tournamentId: match.tournamentId,
                            playerId: input.playerId,
                        },
                    },
                    create: {
                        tournamentId: match.tournamentId,
                        playerId: input.playerId,
                        ...deltas,
                    },
                    update: buildIncrements(deltas),
                });
            }
        }
        // 5. Pass edge for COMPLETION or GOAL with a receiver
        if ((input.actionType === 'COMPLETION' || input.actionType === 'GOAL') &&
            input.secondaryPlayerId) {
            await tx.playerPassEdge.upsert({
                where: {
                    fromPlayerId_toPlayerId: {
                        fromPlayerId: input.playerId,
                        toPlayerId: input.secondaryPlayerId,
                    },
                },
                create: {
                    fromPlayerId: input.playerId,
                    toPlayerId: input.secondaryPlayerId,
                    count: 1,
                },
                update: { count: { increment: 1 } },
            });
        }
        // 6. Update live score on match
        if (input.scoreUsAtEvent !== undefined ||
            input.scoreThemAtEvent !== undefined) {
            await tx.match.update({
                where: { id: matchId },
                data: {
                    ...(input.scoreUsAtEvent !== undefined && {
                        homeScore: input.scoreUsAtEvent,
                    }),
                    ...(input.scoreThemAtEvent !== undefined && {
                        awayScore: input.scoreThemAtEvent,
                    }),
                },
            });
        }
    });
    return { status: 'success' };
}
async function undoLastEvent(matchId, userId) {
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const match = await prisma_1.prisma.match.findUnique({ where: { id: matchId } });
    if (!match)
        throw err(404, 'Match not found');
    const lastEvent = await prisma_1.prisma.frisbeeMatchEvent.findFirst({
        where: { matchId },
        orderBy: { createdAt: 'desc' },
    });
    if (!lastEvent)
        throw err(404, 'No events to undo');
    const deltas = getStatDeltas(lastEvent.actionType);
    const hasDeltas = Object.keys(deltas).length > 0;
    await prisma_1.prisma.$transaction(async (tx) => {
        if (hasDeltas) {
            // Decrement career stats (floor at 0 via Math.max is not atomic — use decrement and accept negative as acceptable in edge cases)
            await tx.frisbeePlayerStat.upsert({
                where: { playerId: lastEvent.playerId },
                create: { playerId: lastEvent.playerId },
                update: buildDecrements(deltas),
            });
            await tx.matchPlayerStat.upsert({
                where: {
                    matchId_playerId: { matchId, playerId: lastEvent.playerId },
                },
                create: { matchId, playerId: lastEvent.playerId },
                update: buildDecrements(deltas),
            });
            if (match.tournamentId) {
                await tx.tournamentPlayerStat.upsert({
                    where: {
                        tournamentId_playerId: {
                            tournamentId: match.tournamentId,
                            playerId: lastEvent.playerId,
                        },
                    },
                    create: {
                        tournamentId: match.tournamentId,
                        playerId: lastEvent.playerId,
                    },
                    update: buildDecrements(deltas),
                });
            }
        }
        // Undo pass edge if applicable
        if ((lastEvent.actionType === 'COMPLETION' || lastEvent.actionType === 'GOAL') &&
            lastEvent.secondaryPlayerId) {
            await tx.playerPassEdge.upsert({
                where: {
                    fromPlayerId_toPlayerId: {
                        fromPlayerId: lastEvent.playerId,
                        toPlayerId: lastEvent.secondaryPlayerId,
                    },
                },
                create: {
                    fromPlayerId: lastEvent.playerId,
                    toPlayerId: lastEvent.secondaryPlayerId,
                    count: 0,
                },
                update: { count: { decrement: 1 } },
            });
        }
        // Delete the event
        await tx.frisbeeMatchEvent.delete({ where: { id: lastEvent.id } });
    });
    return { status: 'success' };
}
async function archivePoint(matchId, userId, input) {
    if (!Array.isArray(input.lineup) || input.lineup.length === 0) {
        throw err(400, 'lineup must be a non-empty array of player IDs');
    }
    if (input.whoScored !== 'US' && input.whoScored !== 'THEM') {
        throw err(400, "whoScored must be 'US' or 'THEM'");
    }
    if (input.startMode !== 'OFFENSE' && input.startMode !== 'DEFENSE') {
        throw err(400, "startMode must be 'OFFENSE' or 'DEFENSE'");
    }
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const match = await prisma_1.prisma.match.findUnique({ where: { id: matchId } });
    if (!match)
        throw err(404, 'Match not found');
    // Validate all player IDs upfront
    const players = await prisma_1.prisma.player.findMany({
        where: { id: { in: input.lineup } },
        select: { id: true, teamId: true },
    });
    if (players.length !== input.lineup.length) {
        throw err(400, 'One or more player IDs in lineup are invalid');
    }
    const plusMinusDelta = input.whoScored === 'US' ? 1 : -1;
    await prisma_1.prisma.$transaction(async (tx) => {
        for (const player of players) {
            const pointsUpdate = { pointsPlayed: { increment: 1 } };
            const plusMinusUpdate = { plusMinus: { increment: plusMinusDelta } };
            // MatchPlayerStat
            await tx.matchPlayerStat.upsert({
                where: { matchId_playerId: { matchId, playerId: player.id } },
                create: {
                    matchId,
                    playerId: player.id,
                    pointsPlayed: 1,
                    plusMinus: plusMinusDelta,
                },
                update: { ...pointsUpdate, ...plusMinusUpdate },
            });
            // Career stat
            await tx.frisbeePlayerStat.upsert({
                where: { playerId: player.id },
                create: {
                    playerId: player.id,
                    pointsPlayed: 1,
                    plusMinus: plusMinusDelta,
                },
                update: { ...pointsUpdate, ...plusMinusUpdate },
            });
            // Tournament stat
            if (match.tournamentId) {
                await tx.tournamentPlayerStat.upsert({
                    where: {
                        tournamentId_playerId: {
                            tournamentId: match.tournamentId,
                            playerId: player.id,
                        },
                    },
                    create: {
                        tournamentId: match.tournamentId,
                        playerId: player.id,
                        pointsPlayed: 1,
                        plusMinus: plusMinusDelta,
                    },
                    update: { ...pointsUpdate, ...plusMinusUpdate },
                });
            }
        }
    });
    return { status: 'success' };
}
async function updateMatch(matchId, userId, input) {
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const patch = {};
    if (input.youtubeVideoId !== undefined) {
        patch['youtubeVideoId'] = input.youtubeVideoId.trim() || null;
    }
    if (input.opponentName !== undefined) {
        patch['opponentName'] = input.opponentName.trim() || null;
    }
    if (Object.keys(patch).length === 0) {
        throw err(400, 'Nothing to update');
    }
    return prisma_1.prisma.match.update({ where: { id: matchId }, data: patch });
}
// ---------------------------------------------------------------------------
// Existing detail query
// ---------------------------------------------------------------------------
async function getMatchDetail(matchId, userId) {
    await (0, teamAuthorization_1.assertMatchOwnership)(matchId, userId);
    const [match, events, playerStats] = await prisma_1.prisma.$transaction([
        prisma_1.prisma.match.findUnique({
            where: { id: matchId },
            include: {
                homeTeam: { select: { id: true, name: true, logoUrl: true } },
                awayTeam: { select: { id: true, name: true, logoUrl: true } },
                tournament: { select: { id: true, name: true } },
            },
        }),
        prisma_1.prisma.frisbeeMatchEvent.findMany({
            where: { matchId },
            orderBy: { createdAt: 'asc' },
        }),
        prisma_1.prisma.matchPlayerStat.findMany({
            where: { matchId },
            include: {
                player: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        jerseyNumber: true,
                    },
                },
            },
        }),
    ]);
    return { match, events, playerStats };
}
//# sourceMappingURL=matchService.js.map