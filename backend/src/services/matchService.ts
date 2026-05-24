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
  awayTeamId?: string | null;
  opponentName?: string | null;
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

export async function createMatch(
  teamId: string,
  userId: string,
  input: CreateMatchInput,
) {
  await assertTeamOwnership(teamId, userId);

  if (!input.homeTeamId) throw err(400, 'homeTeamId is required');
  if (input.homeTeamId !== teamId) throw err(400, 'homeTeamId must match the path teamId');

  const hasRegisteredOpponent = Boolean(input.awayTeamId);
  const hasExternalOpponent = Boolean(input.opponentName?.trim());

  if (!hasRegisteredOpponent && !hasExternalOpponent) {
    throw err(400, 'Either awayTeamId or opponentName is required');
  }
  if (hasRegisteredOpponent && hasExternalOpponent) {
    throw err(400, 'Provide either awayTeamId or opponentName, not both');
  }

  if (hasRegisteredOpponent) {
    if (input.awayTeamId === input.homeTeamId) {
      throw err(400, 'homeTeamId and awayTeamId must differ');
    }
    await assertTeamOwnership(input.awayTeamId!, userId);
  }

  if (input.tournamentId) {
    const tournament = await assertTournamentOwnership(input.tournamentId, userId);
    if (tournament.ownerTeamId !== teamId) {
      throw err(400, 'Tournament does not belong to this team');
    }
  }
  if (!input.matchDate) throw err(400, 'matchDate is required');

  return matchRepository.createMatch({
    homeTeamId: input.homeTeamId,
    awayTeamId: hasRegisteredOpponent ? input.awayTeamId : null,
    opponentName: hasExternalOpponent ? input.opponentName!.trim() : null,
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
