/**
 * Returns FrisbeePlayerStat rows joined with the player record, restricted to
 * a single team. Stats may be missing for players who never played — we
 * left-join via player.stats relation.
 */
export declare function findStatsByTeam(teamId: string): Promise<({
    stats: {
        id: string;
        goals: number;
        assists: number;
        blocks: number;
        throwaways: number;
        drops: number;
        callahans: number;
        completions: number;
        playerId: string;
        matchesPlayed: number;
        pointsPlayed: number;
        successfulPasses: number;
        pullAttempts: number;
        successfulPulls: number;
        plusMinus: number;
    } | null;
} & {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: import("../generated/prisma/enums").PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
})[]>;
//# sourceMappingURL=statRepository.d.ts.map