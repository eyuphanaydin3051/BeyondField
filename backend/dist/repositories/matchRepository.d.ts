import { MatchStatus } from '../generated/prisma/enums';
export declare function findMatchesByTeam(teamId: string): Promise<({
    tournament: {
        id: string;
        name: string;
    } | null;
    homeTeam: {
        id: string;
        name: string;
        logoUrl: string | null;
    };
    awayTeam: {
        id: string;
        name: string;
        logoUrl: string | null;
    } | null;
} & {
    id: string;
    createdAt: Date;
    sportType: import("../generated/prisma/enums").SportType;
    homeTeamId: string;
    awayTeamId: string | null;
    opponentName: string | null;
    tournamentId: string | null;
    matchDate: Date;
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
})[]>;
export declare function findMatchById(id: string): Promise<({
    tournament: {
        id: string;
        name: string;
    } | null;
    homeTeam: {
        id: string;
        name: string;
        logoUrl: string | null;
    };
    awayTeam: {
        id: string;
        name: string;
        logoUrl: string | null;
    } | null;
} & {
    id: string;
    createdAt: Date;
    sportType: import("../generated/prisma/enums").SportType;
    homeTeamId: string;
    awayTeamId: string | null;
    opponentName: string | null;
    tournamentId: string | null;
    matchDate: Date;
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
}) | null>;
export declare function findEventsByMatch(matchId: string): Promise<{
    id: string;
    createdAt: Date;
    minute: number;
    playerId: string;
    matchId: string;
    secondaryPlayerId: string | null;
    actionType: import("../generated/prisma/enums").FrisbeeActionType;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
}[]>;
export declare function findPlayerStatsByMatch(matchId: string): Promise<({
    player: {
        id: string;
        firstName: string;
        lastName: string;
        jerseyNumber: number;
    };
} & {
    id: string;
    goals: number;
    assists: number;
    blocks: number;
    throwaways: number;
    drops: number;
    callahans: number;
    completions: number;
    playerId: string;
    pointsPlayed: number;
    plusMinus: number;
    matchId: string;
})[]>;
export declare function createMatch(data: {
    homeTeamId: string;
    awayTeamId?: string | null;
    opponentName?: string | null;
    tournamentId: string | null;
    matchDate: Date;
}): Promise<{
    id: string;
    createdAt: Date;
    sportType: import("../generated/prisma/enums").SportType;
    homeTeamId: string;
    awayTeamId: string | null;
    opponentName: string | null;
    tournamentId: string | null;
    matchDate: Date;
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
}>;
export declare function deleteMatch(id: string): Promise<{
    id: string;
    createdAt: Date;
    sportType: import("../generated/prisma/enums").SportType;
    homeTeamId: string;
    awayTeamId: string | null;
    opponentName: string | null;
    tournamentId: string | null;
    matchDate: Date;
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
}>;
export declare function updateMatchStatus(matchId: string, status: MatchStatus, finished: boolean): Promise<{
    id: string;
    createdAt: Date;
    sportType: import("../generated/prisma/enums").SportType;
    homeTeamId: string;
    awayTeamId: string | null;
    opponentName: string | null;
    tournamentId: string | null;
    matchDate: Date;
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
}>;
//# sourceMappingURL=matchRepository.d.ts.map