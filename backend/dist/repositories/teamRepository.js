"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTeamsByOwner = findTeamsByOwner;
exports.createTeam = createTeam;
const prisma_1 = require("../lib/prisma");
async function findTeamsByOwner(ownerId) {
    return prisma_1.prisma.team.findMany({
        where: { ownerId },
        orderBy: { createdAt: 'desc' },
    });
}
async function createTeam(data) {
    return prisma_1.prisma.team.create({ data });
}
//# sourceMappingURL=teamRepository.js.map