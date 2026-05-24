import { prisma } from '../lib/prisma';

export async function findTournamentsByTeam(teamId: string) {
  return prisma.tournament.findMany({
    where: { ownerTeamId: teamId },
    orderBy: { startDate: 'desc' },
  });
}

export async function findTournamentById(id: string) {
  return prisma.tournament.findUnique({ where: { id } });
}

export async function findByTeamAndName(teamId: string, name: string) {
  return prisma.tournament.findFirst({
    where: { ownerTeamId: teamId, name },
  });
}

export async function createTournament(data: {
  name: string;
  ownerTeamId: string;
  startDate: Date;
  endDate: Date | null;
  location: string | null;
}) {
  return prisma.tournament.create({ data });
}

export async function updateTournament(
  id: string,
  data: Partial<{
    name: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
  }>,
) {
  return prisma.tournament.update({ where: { id }, data });
}

export async function deleteTournament(id: string) {
  // TODO(stat-recompute): when matches reference a tournament, deleting it
  // currently sets Match.tournamentId to NULL via FK onDelete: SetNull. Once
  // TournamentPlayerStat / event aggregation lands (Step 5), we must also
  // decrement aggregate stat tables here in a transaction.
  return prisma.tournament.delete({ where: { id } });
}

// ---------------------------------------------------------------------------
// Roster
// ---------------------------------------------------------------------------

export async function findRosterByTournament(tournamentId: string) {
  return prisma.tournamentRosterPlayer.findMany({
    where: { tournamentId },
    include: {
      player: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          position: true,
          jerseyNumber: true,
          photoUrl: true,
        },
      },
    },
    orderBy: { player: { jerseyNumber: 'asc' } },
  });
}

export async function findRosterPlayer(tournamentId: string, playerId: string) {
  return prisma.tournamentRosterPlayer.findUnique({
    where: { tournamentId_playerId: { tournamentId, playerId } },
  });
}

export async function addPlayerToRoster(
  tournamentId: string,
  playerId: string,
  jerseyOverride?: number | null,
) {
  return prisma.tournamentRosterPlayer.create({
    data: { tournamentId, playerId, jerseyOverride: jerseyOverride ?? null },
    include: {
      player: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          position: true,
          jerseyNumber: true,
          photoUrl: true,
        },
      },
    },
  });
}

export async function removePlayerFromRoster(
  tournamentId: string,
  playerId: string,
) {
  return prisma.tournamentRosterPlayer.delete({
    where: { tournamentId_playerId: { tournamentId, playerId } },
  });
}
