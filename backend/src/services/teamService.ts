import { prisma } from '../lib/prisma';
import * as teamRepository from '../repositories/teamRepository';
import { assertTeamOwnership } from './teamAuthorization';

export async function listTeams(userId: string) {
  return teamRepository.findTeamsByOwner(userId);
}

export async function createTeam(userId: string, name: string, logoUrl?: string | null) {
  const trimmed = name?.trim();
  if (!trimmed) {
    const err = new Error('Team name is required') as Error & { statusCode?: number };
    err.statusCode = 400;
    throw err;
  }

  return teamRepository.createTeam({
    name: trimmed,
    logoUrl: logoUrl?.trim() ? logoUrl.trim() : null,
    ownerId: userId,
  });
}

// ---------------------------------------------------------------------------
// CSV export
// ---------------------------------------------------------------------------

function escapeCsvField(value: string | number | null | undefined): string {
  const str = value === null || value === undefined ? '' : String(value);
  // Wrap in quotes if the value contains a comma, quote, or newline
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function buildPlayersCsv(teamId: string, userId: string): Promise<string> {
  await assertTeamOwnership(teamId, userId);

  const players = await prisma.player.findMany({
    where: { teamId },
    include: { stats: true },
    orderBy: { jerseyNumber: 'asc' },
  });

  const HEADERS = [
    'jersey_number',
    'first_name',
    'last_name',
    'position',
    'matches_played',
    'points_played',
    'goals',
    'assists',
    'blocks',
    'throwaways',
    'drops',
    'callahans',
    'completions',
    'successful_passes',
    'pull_attempts',
    'successful_pulls',
    'plus_minus',
  ];

  const rows: string[] = [HEADERS.join(',')];

  for (const player of players) {
    const s = player.stats;
    const row = [
      escapeCsvField(player.jerseyNumber),
      escapeCsvField(player.firstName),
      escapeCsvField(player.lastName),
      escapeCsvField(player.position),
      escapeCsvField(s?.matchesPlayed ?? 0),
      escapeCsvField(s?.pointsPlayed ?? 0),
      escapeCsvField(s?.goals ?? 0),
      escapeCsvField(s?.assists ?? 0),
      escapeCsvField(s?.blocks ?? 0),
      escapeCsvField(s?.throwaways ?? 0),
      escapeCsvField(s?.drops ?? 0),
      escapeCsvField(s?.callahans ?? 0),
      escapeCsvField(s?.completions ?? 0),
      escapeCsvField(s?.successfulPasses ?? 0),
      escapeCsvField(s?.pullAttempts ?? 0),
      escapeCsvField(s?.successfulPulls ?? 0),
      escapeCsvField(s?.plusMinus ?? 0),
    ];
    rows.push(row.join(','));
  }

  return rows.join('\r\n');
}
