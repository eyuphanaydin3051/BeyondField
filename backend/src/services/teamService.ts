import * as teamRepository from '../repositories/teamRepository';

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
