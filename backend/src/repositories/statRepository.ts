import { prisma } from '../lib/prisma';

/**
 * Returns FrisbeePlayerStat rows joined with the player record, restricted to
 * a single team. Stats may be missing for players who never played — we
 * left-join via player.stats relation.
 */
export async function findStatsByTeam(teamId: string) {
  return prisma.player.findMany({
    where: { teamId },
    include: { stats: true },
    orderBy: [{ jerseyNumber: 'asc' }],
  });
}
