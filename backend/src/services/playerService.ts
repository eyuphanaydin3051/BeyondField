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

export async function listPlayers(teamId: string, userId: string) {
  await assertTeamOwnership(teamId, userId);
  return playerRepository.findPlayersByTeam(teamId);
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
