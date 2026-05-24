import { prisma } from '../lib/prisma';
import { PlayerPosition } from '../generated/prisma/enums';
import { assertTeamOwnership } from './teamAuthorization';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

interface DiscBasePlayer {
  id?: string;
  name?: string;
  position?: string;
  email?: string;
  jerseyNumber?: number;
}

interface DiscBaseBackup {
  players?: DiscBasePlayer[];
}

function mapPosition(raw: string | undefined): PlayerPosition {
  const lower = (raw ?? '').toLowerCase();
  if (lower === 'handler') return PlayerPosition.HANDLER;
  if (lower === 'cutter') return PlayerPosition.CUTTER;
  if (lower === 'hybrid') return PlayerPosition.HYBRID;
  return PlayerPosition.HYBRID;
}

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim();
  const spaceIdx = trimmed.indexOf(' ');
  if (spaceIdx === -1) return { firstName: trimmed, lastName: '' };
  return {
    firstName: trimmed.slice(0, spaceIdx),
    lastName: trimmed.slice(spaceIdx + 1),
  };
}

export async function importDiscBase(
  teamId: string,
  userId: string,
  fileBuffer: Buffer,
): Promise<{ imported: number; skipped: number }> {
  await assertTeamOwnership(teamId, userId);

  let backup: DiscBaseBackup;
  try {
    backup = JSON.parse(fileBuffer.toString('utf-8'));
  } catch {
    throw err(400, 'Invalid JSON file');
  }

  const rawPlayers = backup.players;
  if (!Array.isArray(rawPlayers) || rawPlayers.length === 0) {
    throw err(400, 'No players found in the backup file');
  }

  const existingPlayers = await prisma.player.findMany({
    where: { teamId },
    select: { firstName: true, lastName: true },
  });
  const existingNames = new Set(
    existingPlayers.map((p) => `${p.firstName} ${p.lastName}`.toLowerCase()),
  );

  let imported = 0;
  let skipped = 0;

  for (const raw of rawPlayers) {
    if (!raw.name?.trim()) { skipped++; continue; }
    const { firstName, lastName } = splitName(raw.name);
    const fullKey = `${firstName} ${lastName}`.toLowerCase();
    if (existingNames.has(fullKey)) { skipped++; continue; }

    await prisma.player.create({
      data: {
        firstName,
        lastName,
        position: mapPosition(raw.position),
        jerseyNumber: typeof raw.jerseyNumber === 'number' ? raw.jerseyNumber : 0,
        teamId,
      },
    });

    existingNames.add(fullKey);
    imported++;
  }

  return { imported, skipped };
}
