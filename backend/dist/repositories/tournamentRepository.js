"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTournamentsByTeam = findTournamentsByTeam;
exports.findTournamentById = findTournamentById;
exports.findByTeamAndName = findByTeamAndName;
exports.createTournament = createTournament;
exports.updateTournament = updateTournament;
exports.deleteTournament = deleteTournament;
exports.findRosterByTournament = findRosterByTournament;
exports.findRosterPlayer = findRosterPlayer;
exports.addPlayerToRoster = addPlayerToRoster;
exports.removePlayerFromRoster = removePlayerFromRoster;
const prisma_1 = require("../lib/prisma");
async function findTournamentsByTeam(teamId) {
    return prisma_1.prisma.tournament.findMany({
        where: { ownerTeamId: teamId },
        orderBy: { startDate: 'desc' },
    });
}
async function findTournamentById(id) {
    return prisma_1.prisma.tournament.findUnique({ where: { id } });
}
async function findByTeamAndName(teamId, name) {
    return prisma_1.prisma.tournament.findFirst({
        where: { ownerTeamId: teamId, name },
    });
}
async function createTournament(data) {
    return prisma_1.prisma.tournament.create({ data });
}
async function updateTournament(id, data) {
    return prisma_1.prisma.tournament.update({ where: { id }, data });
}
async function deleteTournament(id) {
    // TODO(stat-recompute): when matches reference a tournament, deleting it
    // currently sets Match.tournamentId to NULL via FK onDelete: SetNull. Once
    // TournamentPlayerStat / event aggregation lands (Step 5), we must also
    // decrement aggregate stat tables here in a transaction.
    return prisma_1.prisma.tournament.delete({ where: { id } });
}
// ---------------------------------------------------------------------------
// Roster
// ---------------------------------------------------------------------------
async function findRosterByTournament(tournamentId) {
    return prisma_1.prisma.tournamentRosterPlayer.findMany({
        where: { tournamentId },
        include: {
            player: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    position: true,
                    jerseyNumber: true,
                    photoUrl: true,
                },
            },
        },
        orderBy: { player: { jerseyNumber: 'asc' } },
    });
}
async function findRosterPlayer(tournamentId, playerId) {
    return prisma_1.prisma.tournamentRosterPlayer.findUnique({
        where: { tournamentId_playerId: { tournamentId, playerId } },
    });
}
async function addPlayerToRoster(tournamentId, playerId, jerseyOverride) {
    return prisma_1.prisma.tournamentRosterPlayer.create({
        data: { tournamentId, playerId, jerseyOverride: jerseyOverride ?? null },
        include: {
            player: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    position: true,
                    jerseyNumber: true,
                    photoUrl: true,
                },
            },
        },
    });
}
async function removePlayerFromRoster(tournamentId, playerId) {
    return prisma_1.prisma.tournamentRosterPlayer.delete({
        where: { tournamentId_playerId: { tournamentId, playerId } },
    });
}
//# sourceMappingURL=tournamentRepository.js.map