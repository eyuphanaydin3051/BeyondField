import { prisma } from '../lib/prisma';

export async function findTeamsByOwner(ownerId: string) {
  return prisma.team.findMany({
    where: { ownerId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function createTeam(data: {
  name: string;
  logoUrl: string | null;
  ownerId: string;
}) {
  return prisma.team.create({ data });
}
