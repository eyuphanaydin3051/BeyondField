import { prisma } from '../lib/prisma';
import * as playerRepository from '../repositories/playerRepository';
import { PlayerPosition } from '../generated/prisma/enums';
import {
  assertTeamOwnership,
  assertPlayerOwnership,
} from './teamAuthorization';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

const VALID_POSITIONS = Object.values(PlayerPosition) as string[];

export interface CreatePlayerInput {
  firstName: string;
  lastName: string;
  position: string;
  jerseyNumber: number;
  photoUrl?: string | null;
}

export interface UpdatePlayerInput {
  firstName?: string;
  lastName?: string;
  position?: string;
  jerseyNumber?: number;
  photoUrl?: string | null;
}

function normalizePosition(value: string): PlayerPosition {
  const up = value?.toUpperCase();
  if (!VALID_POSITIONS.includes(up)) {
    throw err(400, 'Invalid position');
  }
  return up as PlayerPosition;
}

export async function listPlayers(
  teamId: string,
  userId: string,
  filters?: { search?: string; position?: string },
) {
  await assertTeamOwnership(teamId, userId);
  const resolvedPosition =
    filters?.position ? normalizePosition(filters.position) : undefined;
  return playerRepository.findPlayersByTeam(teamId, {
    search: filters?.search,
    position: resolvedPosition,
  });
}

export async function createPlayer(
  teamId: string,
  userId: string,
  input: CreatePlayerInput,
) {
  await assertTeamOwnership(teamId, userId);

  const firstName = input.firstName?.trim();
  const lastName = input.lastName?.trim();
  if (!firstName) throw err(400, 'firstName is required');
  if (!lastName) throw err(400, 'lastName is required');
  if (!Number.isInteger(input.jerseyNumber) || input.jerseyNumber < 0) {
    throw err(400, 'jerseyNumber must be a non-negative integer');
  }

  const existing = await playerRepository.findByTeamAndJersey(
    teamId,
    input.jerseyNumber,
  );
  if (existing) throw err(409, 'jerseyNumber already taken for this team');

  return playerRepository.createPlayer({
    firstName,
    lastName,
    position: normalizePosition(input.position),
    jerseyNumber: input.jerseyNumber,
    photoUrl: input.photoUrl?.trim() ? input.photoUrl.trim() : null,
    teamId,
  });
}

export async function updatePlayer(
  playerId: string,
  userId: string,
  input: UpdatePlayerInput,
) {
  const player = await assertPlayerOwnership(playerId, userId);

  if (
    input.jerseyNumber !== undefined &&
    input.jerseyNumber !== player.jerseyNumber
  ) {
    if (!Number.isInteger(input.jerseyNumber) || input.jerseyNumber < 0) {
      throw err(400, 'jerseyNumber must be a non-negative integer');
    }
    const clash = await playerRepository.findByTeamAndJersey(
      player.teamId,
      input.jerseyNumber,
    );
    if (clash && clash.id !== playerId) {
      throw err(409, 'jerseyNumber already taken for this team');
    }
  }

  const patch: Parameters<typeof playerRepository.updatePlayer>[1] = {};
  if (input.firstName !== undefined) {
    const v = input.firstName.trim();
    if (!v) throw err(400, 'firstName cannot be empty');
    patch.firstName = v;
  }
  if (input.lastName !== undefined) {
    const v = input.lastName.trim();
    if (!v) throw err(400, 'lastName cannot be empty');
    patch.lastName = v;
  }
  if (input.position !== undefined) {
    patch.position = normalizePosition(input.position);
  }
  if (input.jerseyNumber !== undefined) {
    patch.jerseyNumber = input.jerseyNumber;
  }
  if (input.photoUrl !== undefined) {
    patch.photoUrl = input.photoUrl?.trim() ? input.photoUrl.trim() : null;
  }

  return playerRepository.updatePlayer(playerId, patch);
}

export async function deletePlayer(playerId: string, userId: string) {
  await assertPlayerOwnership(playerId, userId);
  return playerRepository.deletePlayer(playerId);
}

// ---------------------------------------------------------------------------
// Career stats
// ---------------------------------------------------------------------------

function safeDivide(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : Math.round((numerator / denominator) * 100) / 100;
}

export async function getCareerStats(playerId: string, userId: string): Promise<object> {
  const player = await assertPlayerOwnership(playerId, userId);

  const stats = await prisma.frisbeePlayerStat.findUnique({
    where: { playerId },
  });

  const zero = {
    goals: 0, assists: 0, blocks: 0, throwaways: 0,
    drops: 0, callahans: 0, completions: 0, successfulPasses: 0,
    pullAttempts: 0, successfulPulls: 0, plusMinus: 0,
    matchesPlayed: 0, pointsPlayed: 0,
  };

  const totalStats = stats ?? { ...zero, id: '', playerId };

  const mp = totalStats.matchesPlayed;
  const pp = totalStats.pointsPlayed;

  const perMatch = {
    goals:          safeDivide(totalStats.goals, mp),
    assists:        safeDivide(totalStats.assists, mp),
    blocks:         safeDivide(totalStats.blocks, mp),
    throwaways:     safeDivide(totalStats.throwaways, mp),
    drops:          safeDivide(totalStats.drops, mp),
    callahans:      safeDivide(totalStats.callahans, mp),
    completions:    safeDivide(totalStats.completions, mp),
    successfulPasses: safeDivide(totalStats.successfulPasses, mp),
    plusMinus:      safeDivide(totalStats.plusMinus, mp),
  };

  const perPoint = {
    goals:          safeDivide(totalStats.goals, pp),
    assists:        safeDivide(totalStats.assists, pp),
    blocks:         safeDivide(totalStats.blocks, pp),
    throwaways:     safeDivide(totalStats.throwaways, pp),
    drops:          safeDivide(totalStats.drops, pp),
    callahans:      safeDivide(totalStats.callahans, pp),
    completions:    safeDivide(totalStats.completions, pp),
    successfulPasses: safeDivide(totalStats.successfulPasses, pp),
    plusMinus:      safeDivide(totalStats.plusMinus, pp),
  };

  const teamAverages = await prisma.frisbeePlayerStat.aggregate({
    where: { player: { teamId: player.teamId } },
    _avg: {
      goals: true,
      assists: true,
      blocks: true,
      throwaways: true,
      drops: true,
      callahans: true,
      completions: true,
      successfulPasses: true,
      plusMinus: true,
      matchesPlayed: true,
      pointsPlayed: true,
    },
  });

  return {
    player: {
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      jerseyNumber: player.jerseyNumber,
      position: player.position,
    },
    totalStats,
    perMatch,
    perPoint,
    teamAverages: teamAverages._avg,
  };
}

// ---------------------------------------------------------------------------
// Pass network
// ---------------------------------------------------------------------------

export async function getPassNetwork(playerId: string, userId: string): Promise<object[]> {
  await assertPlayerOwnership(playerId, userId);

  const edges = await prisma.playerPassEdge.findMany({
    where: { fromPlayerId: playerId },
    include: {
      toPlayer: {
        select: { id: true, firstName: true, lastName: true, jerseyNumber: true },
      },
    },
    orderBy: { count: 'desc' },
    take: 6,
  });

  return edges.map((edge) => ({
    toPlayerId:     edge.toPlayerId,
    toPlayerName:   `${edge.toPlayer.firstName} ${edge.toPlayer.lastName}`,
    jerseyNumber:   edge.toPlayer.jerseyNumber,
    count:          edge.count,
  }));
}
