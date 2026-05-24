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

export type PlayerPosition = 'HANDLER' | 'CUTTER' | 'HYBRID';

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: PlayerPosition;
  jerseyNumber: number;
  photoUrl: string | null;
  teamId: string;
  createdAt: string;
}

export interface Tournament {
  id: string;
  name: string;
  ownerTeamId: string;
  sportType: SportType;
  startDate: string;
  endDate: string | null;
  location: string | null;
  createdAt: string;
}

export interface TeamSummary {
  id: string;
  name: string;
  logoUrl: string | null;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string | null;
  opponentName: string | null;
  tournamentId: string | null;
  matchDate: string;
  status: MatchStatus;
  sportType: SportType;
  homeScore: number;
  awayScore: number;
  youtubeVideoId: string | null;
  durationSeconds: number | null;
  finished: boolean;
  createdAt: string;
  homeTeam?: TeamSummary;
  awayTeam?: TeamSummary;
  tournament?: { id: string; name: string } | null;
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

export interface LeaderboardRow {
  playerId: string;
  firstName: string;
  lastName: string;
  jerseyNumber: number;
  position: PlayerPosition;
  matchesPlayed: number;
  pointsPlayed: number;
  rawValue: number;
  displayValue: number;
}

export interface LeaderboardResponse {
  sortBy: LeaderboardSortBy;
  mode: LeaderboardMode;
  rows: LeaderboardRow[];
}

export interface MatchEvent {
  id: string;
  matchId: string;
  playerId: string;
  secondaryPlayerId: string | null;
  actionType: string;
  minute: number;
  videoTimestampSeconds: number | null;
  period: number | null;
  scoreUsAtEvent: number | null;
  scoreThemAtEvent: number | null;
  createdAt: string;
}

export interface MatchPlayerStat {
  id: string;
  matchId: string;
  playerId: string;
  goals: number;
  assists: number;
  blocks: number;
  throwaways: number;
  drops: number;
  callahans: number;
  completions: number;
  pointsPlayed: number;
  plusMinus: number;
  player?: {
    id: string;
    firstName: string;
    lastName: string;
    jerseyNumber: number;
  };
}

export interface MatchDetailResponse {
  match: Match;
  events: MatchEvent[];
  playerStats: MatchPlayerStat[];
}
