import { prisma } from '../lib/prisma';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

/**
 * Ensures `userId` owns the team referenced by `teamId`.
 * Throws 403/404 otherwise.
 */
export async function assertTeamOwnership(teamId: string, userId: string) {
  const team = await prisma.team.findUnique({ where: { id: teamId } });
  if (!team) throw err(404, 'Team not found');
  if (team.ownerId !== userId) throw err(403, 'Forbidden');
  return team;
}

/** Walks player -> team and checks ownership. */
export async function assertPlayerOwnership(playerId: string, userId: string) {
  const player = await prisma.player.findUnique({
    where: { id: playerId },
    include: { team: true },
  });
  if (!player) throw err(404, 'Player not found');
  if (player.team.ownerId !== userId) throw err(403, 'Forbidden');
  return player;
}

export async function assertTournamentOwnership(tournamentId: string, userId: string) {
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    include: { ownerTeam: true },
  });
  if (!tournament) throw err(404, 'Tournament not found');
  if (tournament.ownerTeam.ownerId !== userId) throw err(403, 'Forbidden');
  return tournament;
}

export async function assertMatchOwnership(matchId: string, userId: string) {
  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: { homeTeam: true, awayTeam: true },
  });
  if (!match) throw err(404, 'Match not found');
  if (match.homeTeam.ownerId !== userId && match.awayTeam.ownerId !== userId) {
    throw err(403, 'Forbidden');
  }
  return match;
}
