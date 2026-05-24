"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStatsByTeam = findStatsByTeam;
const prisma_1 = require("../lib/prisma");
/**
 * Returns FrisbeePlayerStat rows joined with the player record, restricted to
 * a single team. Stats may be missing for players who never played — we
 * left-join via player.stats relation.
 */
async function findStatsByTeam(teamId) {
    return prisma_1.prisma.player.findMany({
        where: { teamId },
        include: { stats: true },
        orderBy: [{ jerseyNumber: 'asc' }],
    });
}
//# sourceMappingURL=statRepository.js.map