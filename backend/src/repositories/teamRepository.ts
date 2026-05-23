import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg(process.env['DATABASE_URL'] as string),
});

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
