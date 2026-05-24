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
exports.listTournaments = listTournaments;
exports.createTournament = createTournament;
exports.updateTournament = updateTournament;
exports.deleteTournament = deleteTournament;
exports.getTournamentRoster = getTournamentRoster;
exports.addToRoster = addToRoster;
exports.removeFromRoster = removeFromRoster;
exports.getTournamentDetail = getTournamentDetail;
const prisma_1 = require("../lib/prisma");
const tournamentRepository = __importStar(require("../repositories/tournamentRepository"));
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
async function listTournaments(teamId, userId) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    return tournamentRepository.findTournamentsByTeam(teamId);
}
async function createTournament(teamId, userId, input) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    const name = input.name?.trim();
    if (!name)
        throw err(400, 'name is required');
    if (!input.startDate)
        throw err(400, 'startDate is required');
    const clash = await tournamentRepository.findByTeamAndName(teamId, name);
    if (clash)
        throw err(409, 'A tournament with this name already exists');
    return tournamentRepository.createTournament({
        name,
        ownerTeamId: teamId,
        startDate: parseDate(input.startDate, 'startDate'),
        endDate: input.endDate ? parseDate(input.endDate, 'endDate') : null,
        location: input.location?.trim() ? input.location.trim() : null,
    });
}
async function updateTournament(tournamentId, userId, input) {
    const existing = await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    const patch = {};
    if (input.name !== undefined) {
        const name = input.name.trim();
        if (!name)
            throw err(400, 'name cannot be empty');
        if (name !== existing.name) {
            const clash = await tournamentRepository.findByTeamAndName(existing.ownerTeamId, name);
            if (clash && clash.id !== tournamentId) {
                throw err(409, 'A tournament with this name already exists');
            }
        }
        patch.name = name;
    }
    if (input.startDate !== undefined) {
        patch.startDate = parseDate(input.startDate, 'startDate');
    }
    if (input.endDate !== undefined) {
        patch.endDate = input.endDate ? parseDate(input.endDate, 'endDate') : null;
    }
    if (input.location !== undefined) {
        patch.location = input.location?.trim() ? input.location.trim() : null;
    }
    return tournamentRepository.updateTournament(tournamentId, patch);
}
async function deleteTournament(tournamentId, userId) {
    await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    return tournamentRepository.deleteTournament(tournamentId);
}
// ---------------------------------------------------------------------------
// Roster
// ---------------------------------------------------------------------------
async function getTournamentRoster(tournamentId, userId) {
    await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    return tournamentRepository.findRosterByTournament(tournamentId);
}
async function addToRoster(tournamentId, userId, playerId, jerseyOverride) {
    const tournament = await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    // Ensure the player belongs to the same team as the tournament
    const player = await (0, teamAuthorization_1.assertPlayerOwnership)(playerId, userId);
    if (player.teamId !== tournament.ownerTeamId) {
        throw err(400, 'Player does not belong to this team');
    }
    const existing = await tournamentRepository.findRosterPlayer(tournamentId, playerId);
    if (existing)
        throw err(409, 'Player is already on this tournament roster');
    return tournamentRepository.addPlayerToRoster(tournamentId, playerId, jerseyOverride);
}
async function removeFromRoster(tournamentId, userId, playerId) {
    await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    const existing = await tournamentRepository.findRosterPlayer(tournamentId, playerId);
    if (!existing)
        throw err(404, 'Player not found in this tournament roster');
    return tournamentRepository.removePlayerFromRoster(tournamentId, playerId);
}
// ---------------------------------------------------------------------------
// Detail (aggregate view)
// ---------------------------------------------------------------------------
async function getTournamentDetail(tournamentId, userId) {
    await (0, teamAuthorization_1.assertTournamentOwnership)(tournamentId, userId);
    const [tournament, matches, roster, playerStats] = await prisma_1.prisma.$transaction([
        prisma_1.prisma.tournament.findUnique({
            where: { id: tournamentId },
            include: { ownerTeam: { select: { id: true, name: true, logoUrl: true } } },
        }),
        prisma_1.prisma.match.findMany({
            where: { tournamentId },
            orderBy: { matchDate: 'desc' },
            include: {
                homeTeam: { select: { id: true, name: true } },
                awayTeam: { select: { id: true, name: true } },
            },
        }),
        prisma_1.prisma.tournamentRosterPlayer.findMany({
            where: { tournamentId },
            include: {
                player: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        jerseyNumber: true,
                        position: true,
                        photoUrl: true,
                    },
                },
            },
        }),
        prisma_1.prisma.tournamentPlayerStat.findMany({
            where: { tournamentId },
            include: {
                player: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        jerseyNumber: true,
                        position: true,
                    },
                },
            },
            orderBy: { goals: 'desc' },
        }),
    ]);
    if (!tournament)
        throw err(404, 'Tournament not found');
    return {
        tournament,
        matches,
        roster: roster.map((r) => r.player),
        playerStats,
    };
}
//# sourceMappingURL=tournamentService.js.map