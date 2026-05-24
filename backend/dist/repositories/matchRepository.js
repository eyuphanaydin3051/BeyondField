"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatchesByTeam = findMatchesByTeam;
exports.findMatchById = findMatchById;
exports.findEventsByMatch = findEventsByMatch;
exports.findPlayerStatsByMatch = findPlayerStatsByMatch;
exports.createMatch = createMatch;
exports.deleteMatch = deleteMatch;
exports.updateMatchStatus = updateMatchStatus;
const prisma_1 = require("../lib/prisma");
const enums_1 = require("../generated/prisma/enums");
async function findMatchesByTeam(teamId) {
    return prisma_1.prisma.match.findMany({
        where: {
            OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }],
        },
        orderBy: { matchDate: 'desc' },
        include: {
            homeTeam: { select: { id: true, name: true, logoUrl: true } },
            awayTeam: { select: { id: true, name: true, logoUrl: true } },
            tournament: { select: { id: true, name: true } },
        },
    });
}
async function findMatchById(id) {
    return prisma_1.prisma.match.findUnique({
        where: { id },
        include: {
            homeTeam: { select: { id: true, name: true, logoUrl: true } },
            awayTeam: { select: { id: true, name: true, logoUrl: true } },
            tournament: { select: { id: true, name: true } },
        },
    });
}
async function findEventsByMatch(matchId) {
    return prisma_1.prisma.frisbeeMatchEvent.findMany({
        where: { matchId },
        orderBy: { createdAt: 'asc' },
    });
}
async function findPlayerStatsByMatch(matchId) {
    return prisma_1.prisma.matchPlayerStat.findMany({
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
    });
}
async function createMatch(data) {
    return prisma_1.prisma.match.create({
        data: {
            ...data,
            status: enums_1.MatchStatus.SCHEDULED,
        },
    });
}
async function deleteMatch(id) {
    return prisma_1.prisma.match.delete({ where: { id } });
}
async function updateMatchStatus(matchId, status, finished) {
    return prisma_1.prisma.match.update({
        where: { id: matchId },
        data: { status, finished },
    });
}
//# sourceMappingURL=matchRepository.js.map