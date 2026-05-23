import type { SportType } from './frisbee';

export * from './frisbee';

export type MatchStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'FINISHED';
export type Role = 'ADMIN' | 'COACH' | 'VIEWER';

export interface Team {
  id: string;
  name: string;
  logoUrl: string | null;
  ownerId: string;
  sportType: SportType;
  createdAt: string;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  jerseyNumber: number;
  photoUrl: string | null;
  teamId: string;
  createdAt: string;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  matchDate: string;
  status: MatchStatus;
  sportType: SportType;
  homeScore: number;
  awayScore: number;
  createdAt: string;
}
