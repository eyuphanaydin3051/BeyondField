"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPlayersByTeam = findPlayersByTeam;
exports.findPlayerById = findPlayerById;
exports.findByTeamAndJersey = findByTeamAndJersey;
exports.createPlayer = createPlayer;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;
const prisma_1 = require("../lib/prisma");
async function findPlayersByTeam(teamId, filters) {
    return prisma_1.prisma.player.findMany({
        where: {
            teamId,
            ...(filters?.position ? { position: filters.position } : {}),
            ...(filters?.search
                ? {
                    OR: [
                        { firstName: { contains: filters.search, mode: 'insensitive' } },
                        { lastName: { contains: filters.search, mode: 'insensitive' } },
                    ],
                }
                : {}),
        },
        orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
    });
}
async function findPlayerById(id) {
    return prisma_1.prisma.player.findUnique({ where: { id } });
}
async function findByTeamAndJersey(teamId, jerseyNumber) {
    return prisma_1.prisma.player.findFirst({ where: { teamId, jerseyNumber } });
}
async function createPlayer(data) {
    return prisma_1.prisma.player.create({ data });
}
async function updatePlayer(id, data) {
    return prisma_1.prisma.player.update({ where: { id }, data });
}
async function deletePlayer(id) {
    return prisma_1.prisma.player.delete({ where: { id } });
}
//# sourceMappingURL=playerRepository.js.map