import { prisma } from '../lib/prisma';
import { MatchStatus } from '../generated/prisma/enums';

export async function findMatchesByTeam(teamId: string) {
  return prisma.match.findMany({
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

export async function findMatchById(id: string) {
  return prisma.match.findUnique({
    where: { id },
    include: {
      homeTeam: { select: { id: true, name: true, logoUrl: true } },
      awayTeam: { select: { id: true, name: true, logoUrl: true } },
      tournament: { select: { id: true, name: true } },
    },
  });
}

export async function findEventsByMatch(matchId: string) {
  return prisma.frisbeeMatchEvent.findMany({
    where: { matchId },
    orderBy: { createdAt: 'asc' },
  });
}

export async function findPlayerStatsByMatch(matchId: string) {
  return prisma.matchPlayerStat.findMany({
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

export async function createMatch(data: {
  homeTeamId: string;
  awayTeamId?: string | null;
  opponentName?: string | null;
  tournamentId: string | null;
  matchDate: Date;
}) {
  return prisma.match.create({
    data: {
      ...data,
      status: MatchStatus.SCHEDULED,
    },
  });
}

export async function deleteMatch(id: string) {
  return prisma.match.delete({ where: { id } });
}
