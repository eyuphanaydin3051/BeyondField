export type LeaderboardSortBy = 'goals' | 'assists' | 'blocks' | 'throwaways' | 'drops' | 'callahans' | 'completions' | 'plusMinus' | 'pointsPlayed' | 'matchesPlayed';
export type LeaderboardMode = 'TOTAL' | 'PER_MATCH' | 'PER_POINT';
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
export declare function computeLeaderboard(teamId: string, userId: string, sortBy: string, mode: string): Promise<LeaderboardRow[]>;
//# sourceMappingURL=statService.d.ts.map