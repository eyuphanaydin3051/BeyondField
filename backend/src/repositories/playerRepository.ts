import { prisma } from '../lib/prisma';
import type { PlayerPosition } from '../generated/prisma/enums';

export async function findPlayersByTeam(teamId: string) {
  return prisma.player.findMany({
    where: { teamId },
    orderBy: [{ jerseyNumber: 'asc' }],
  });
}

export async function findPlayerById(id: string) {
  return prisma.player.findUnique({ where: { id } });
}

export async function findByTeamAndJersey(teamId: string, jerseyNumber: number) {
  return prisma.player.findFirst({ where: { teamId, jerseyNumber } });
}

export async function createPlayer(data: {
  firstName: string;
  lastName: string;
  position: PlayerPosition;
  jerseyNumber: number;
  photoUrl: string | null;
  teamId: string;
}) {
  return prisma.player.create({ data });
}

export async function updatePlayer(
  id: string,
  data: Partial<{
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
  }>,
) {
  return prisma.player.update({ where: { id }, data });
}

export async function deletePlayer(id: string) {
  return prisma.player.delete({ where: { id } });
}
