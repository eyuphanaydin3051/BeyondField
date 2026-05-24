import { prisma } from '../lib/prisma';
import * as matchRepository from '../repositories/matchRepository';
import {
  assertTeamOwnership,
  assertMatchOwnership,
  assertTournamentOwnership,
} from './teamAuthorization';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

export interface CreateMatchInput {
  homeTeamId: string;
  awayTeamId: string;
  tournamentId?: string | null;
  matchDate: string;
}

function parseDate(value: string, field: string): Date {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) throw err(400, `${field} is not a valid date`);
  return d;
}

export async function listMatches(teamId: string, userId: string) {
  await assertTeamOwnership(teamId, userId);
  return matchRepository.findMatchesByTeam(teamId);
}

/**
 * Creates a match between two teams.
 *
 * DECISION (Step 4 / opponent team workaround):
 *   The schema models matches as Team↔Team, but in this phase users only own
 *   teams they personally created. We therefore require BOTH `homeTeamId` and
 *   `awayTeamId` to belong to the requesting user. End users that want to
 *   record a match against another club must first create a lightweight
 *   "Opponent: ClubName" team via the Team CRUD. A future migration may add
 *   a dedicated `opponentName` text column or a team-membership join table.
 */
export async function createMatch(
  teamId: string,
  userId: string,
  input: CreateMatchInput,
) {
  await assertTeamOwnership(teamId, userId);

  if (!input.homeTeamId || !input.awayTeamId) {
    throw err(400, 'homeTeamId and awayTeamId are required');
  }
  if (input.homeTeamId === input.awayTeamId) {
    throw err(400, 'homeTeamId and awayTeamId must differ');
  }
  if (input.homeTeamId !== teamId && input.awayTeamId !== teamId) {
    throw err(400, 'One of the teams must be the path teamId');
  }
  // Validate ownership for BOTH teams.
  await assertTeamOwnership(input.homeTeamId, userId);
  await assertTeamOwnership(input.awayTeamId, userId);

  if (input.tournamentId) {
    const tournament = await assertTournamentOwnership(
      input.tournamentId,
      userId,
    );
    if (tournament.ownerTeamId !== teamId) {
      throw err(400, 'Tournament does not belong to this team');
    }
  }
  if (!input.matchDate) throw err(400, 'matchDate is required');

  return matchRepository.createMatch({
    homeTeamId: input.homeTeamId,
    awayTeamId: input.awayTeamId,
    tournamentId: input.tournamentId ?? null,
    matchDate: parseDate(input.matchDate, 'matchDate'),
  });
}

export async function getMatchDetail(matchId: string, userId: string) {
  await assertMatchOwnership(matchId, userId);
  const [match, events, playerStats] = await prisma.$transaction([
    prisma.match.findUnique({
      where: { id: matchId },
      include: {
        homeTeam: { select: { id: true, name: true, logoUrl: true } },
        awayTeam: { select: { id: true, name: true, logoUrl: true } },
        tournament: { select: { id: true, name: true } },
      },
    }),
    prisma.frisbeeMatchEvent.findMany({
      where: { matchId },
      orderBy: { createdAt: 'asc' },
    }),
    prisma.matchPlayerStat.findMany({
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
    }),
  ]);
  return { match, events, playerStats };
}
