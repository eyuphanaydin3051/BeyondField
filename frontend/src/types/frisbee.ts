export type FrisbeeActionType =
  | 'GOAL'
  | 'ASSIST'
  | 'BLOCK'
  | 'THROWAWAY'
  | 'DROP'
  | 'CALLAHAN'
  | 'DEFENSE';

export type SportType = 'ULTIMATE_FRISBEE';

export interface FrisbeePlayerStat {
  id: string;
  playerId: string;
  goals: number;
  assists: number;
  blocks: number;
  throwaways: number;
  drops: number;
  callahans: number;
  completions: number;
  matchesPlayed: number;
}

export interface FrisbeeMatchEvent {
  id: string;
  matchId: string;
  playerId: string;
  actionType: FrisbeeActionType;
  minute: number;
  createdAt: string;
}
