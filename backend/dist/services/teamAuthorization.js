"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTeamOwnership = assertTeamOwnership;
exports.assertPlayerOwnership = assertPlayerOwnership;
exports.assertTournamentOwnership = assertTournamentOwnership;
exports.assertMatchOwnership = assertMatchOwnership;
const prisma_1 = require("../lib/prisma");
function err(status, message) {
    const e = new Error(message);
    e.statusCode = status;
    return e;
}
/**
 * Ensures `userId` owns the team referenced by `teamId`.
 * Throws 403/404 otherwise.
 */
async function assertTeamOwnership(teamId, userId) {
    const team = await prisma_1.prisma.team.findUnique({ where: { id: teamId } });
    if (!team)
        throw err(404, 'Team not found');
    if (team.ownerId !== userId)
        throw err(403, 'Forbidden');
    return team;
}
/** Walks player -> team and checks ownership. */
async function assertPlayerOwnership(playerId, userId) {
    const player = await prisma_1.prisma.player.findUnique({
        where: { id: playerId },
        include: { team: true },
    });
    if (!player)
        throw err(404, 'Player not found');
    if (player.team.ownerId !== userId)
        throw err(403, 'Forbidden');
    return player;
}
async function assertTournamentOwnership(tournamentId, userId) {
    const tournament = await prisma_1.prisma.tournament.findUnique({
        where: { id: tournamentId },
        include: { ownerTeam: true },
    });
    if (!tournament)
        throw err(404, 'Tournament not found');
    if (tournament.ownerTeam.ownerId !== userId)
        throw err(403, 'Forbidden');
    return tournament;
}
async function assertMatchOwnership(matchId, userId) {
    const match = await prisma_1.prisma.match.findUnique({
        where: { id: matchId },
        include: { homeTeam: true, awayTeam: true },
    });
    if (!match)
        throw err(404, 'Match not found');
    const homeOwns = match.homeTeam.ownerId === userId;
    const awayOwns = match.awayTeam?.ownerId === userId;
    if (!homeOwns && !awayOwns)
        throw err(403, 'Forbidden');
    return match;
}
//# sourceMappingURL=teamAuthorization.js.map