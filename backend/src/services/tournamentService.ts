import * as tournamentRepository from '../repositories/tournamentRepository';
import {
  assertPlayerOwnership,
  assertTeamOwnership,
  assertTournamentOwnership,
} from './teamAuthorization';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

export interface CreateTournamentInput {
  name: string;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
}

export interface UpdateTournamentInput {
  name?: string;
  startDate?: string;
  endDate?: string | null;
  location?: string | null;
}

function parseDate(value: string, field: string): Date {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) throw err(400, `${field} is not a valid date`);
  return d;
}

export async function listTournaments(teamId: string, userId: string) {
  await assertTeamOwnership(teamId, userId);
  return tournamentRepository.findTournamentsByTeam(teamId);
}

export async function createTournament(
  teamId: string,
  userId: string,
  input: CreateTournamentInput,
) {
  await assertTeamOwnership(teamId, userId);

  const name = input.name?.trim();
  if (!name) throw err(400, 'name is required');
  if (!input.startDate) throw err(400, 'startDate is required');

  const clash = await tournamentRepository.findByTeamAndName(teamId, name);
  if (clash) throw err(409, 'A tournament with this name already exists');

  return tournamentRepository.createTournament({
    name,
    ownerTeamId: teamId,
    startDate: parseDate(input.startDate, 'startDate'),
    endDate: input.endDate ? parseDate(input.endDate, 'endDate') : null,
    location: input.location?.trim() ? input.location.trim() : null,
  });
}

export async function updateTournament(
  tournamentId: string,
  userId: string,
  input: UpdateTournamentInput,
) {
  const existing = await assertTournamentOwnership(tournamentId, userId);

  const patch: Parameters<typeof tournamentRepository.updateTournament>[1] = {};
  if (input.name !== undefined) {
    const name = input.name.trim();
    if (!name) throw err(400, 'name cannot be empty');
    if (name !== existing.name) {
      const clash = await tournamentRepository.findByTeamAndName(
        existing.ownerTeamId,
        name,
      );
      if (clash && clash.id !== tournamentId) {
        throw err(409, 'A tournament with this name already exists');
      }
    }
    patch.name = name;
  }
  if (input.startDate !== undefined) {
    patch.startDate = parseDate(input.startDate, 'startDate');
  }
  if (input.endDate !== undefined) {
    patch.endDate = input.endDate ? parseDate(input.endDate, 'endDate') : null;
  }
  if (input.location !== undefined) {
    patch.location = input.location?.trim() ? input.location.trim() : null;
  }

  return tournamentRepository.updateTournament(tournamentId, patch);
}

export async function deleteTournament(tournamentId: string, userId: string) {
  await assertTournamentOwnership(tournamentId, userId);
  return tournamentRepository.deleteTournament(tournamentId);
}

// ---------------------------------------------------------------------------
// Roster
// ---------------------------------------------------------------------------

export async function getTournamentRoster(
  tournamentId: string,
  userId: string,
) {
  await assertTournamentOwnership(tournamentId, userId);
  return tournamentRepository.findRosterByTournament(tournamentId);
}

export async function addToRoster(
  tournamentId: string,
  userId: string,
  playerId: string,
  jerseyOverride?: number | null,
) {
  const tournament = await assertTournamentOwnership(tournamentId, userId);

  // Ensure the player belongs to the same team as the tournament
  const player = await assertPlayerOwnership(playerId, userId);
  if (player.teamId !== tournament.ownerTeamId) {
    throw err(400, 'Player does not belong to this team');
  }

  const existing = await tournamentRepository.findRosterPlayer(
    tournamentId,
    playerId,
  );
  if (existing) throw err(409, 'Player is already on this tournament roster');

  return tournamentRepository.addPlayerToRoster(
    tournamentId,
    playerId,
    jerseyOverride,
  );
}

export async function removeFromRoster(
  tournamentId: string,
  userId: string,
  playerId: string,
) {
  await assertTournamentOwnership(tournamentId, userId);

  const existing = await tournamentRepository.findRosterPlayer(
    tournamentId,
    playerId,
  );
  if (!existing) throw err(404, 'Player not found in this tournament roster');

  return tournamentRepository.removePlayerFromRoster(tournamentId, playerId);
}
