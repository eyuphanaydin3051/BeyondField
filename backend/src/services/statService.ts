import * as statRepository from '../repositories/statRepository';
import { assertTeamOwnership } from './teamAuthorization';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

export type LeaderboardSortBy =
  | 'goals'
  | 'assists'
  | 'blocks'
  | 'throwaways'
  | 'drops'
  | 'callahans'
  | 'completions'
  | 'plusMinus'
  | 'pointsPlayed'
  | 'matchesPlayed';

export type LeaderboardMode = 'TOTAL' | 'PER_MATCH' | 'PER_POINT';

const VALID_SORT: LeaderboardSortBy[] = [
  'goals',
  'assists',
  'blocks',
  'throwaways',
  'drops',
  'callahans',
  'completions',
  'plusMinus',
  'pointsPlayed',
  'matchesPlayed',
];

const VALID_MODES: LeaderboardMode[] = ['TOTAL', 'PER_MATCH', 'PER_POINT'];

export interface LeaderboardRow {
  playerId: string;
  firstName: string;
  lastName: string;
  jerseyNumber: number;
  position: string;
  matchesPlayed: number;
  pointsPlayed: number;
  rawValue: number;
  /** The value already divided by matches/points when mode demands it. */
  displayValue: number;
}

export async function computeLeaderboard(
  teamId: string,
  userId: string,
  sortBy: string,
  mode: string,
): Promise<LeaderboardRow[]> {
  await assertTeamOwnership(teamId, userId);

  if (!VALID_SORT.includes(sortBy as LeaderboardSortBy)) {
    throw err(400, `Invalid sortBy. Allowed: ${VALID_SORT.join(', ')}`);
  }
  if (!VALID_MODES.includes(mode as LeaderboardMode)) {
    throw err(400, `Invalid mode. Allowed: ${VALID_MODES.join(', ')}`);
  }
  const key = sortBy as LeaderboardSortBy;
  const modeKey = mode as LeaderboardMode;

  const players = await statRepository.findStatsByTeam(teamId);

  const rows: LeaderboardRow[] = players.map((p) => {
    const s = p.stats;
    const raw = (s ? (s as Record<string, unknown>)[key] : 0) as number;
    const matches = s?.matchesPlayed ?? 0;
    const points = s?.pointsPlayed ?? 0;

    let display = raw;
    if (modeKey === 'PER_MATCH') {
      display = matches > 0 ? raw / matches : 0;
    } else if (modeKey === 'PER_POINT') {
      display = points > 0 ? raw / points : 0;
    }

    return {
      playerId: p.id,
      firstName: p.firstName,
      lastName: p.lastName,
      jerseyNumber: p.jerseyNumber,
      position: p.position,
      matchesPlayed: matches,
      pointsPlayed: points,
      rawValue: raw,
      displayValue: display,
    };
  });

  rows.sort((a, b) => b.displayValue - a.displayValue);
  return rows;
}
