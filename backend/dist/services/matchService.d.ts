import { MatchStatus } from '../generated/prisma/enums';
export interface CreateMatchInput {
    homeTeamId: string;
    awayTeamId?: string | null;
    opponentName?: string | null;
    tournamentId?: string | null;
    matchDate: string;
}
export declare function listMatches(teamId: string, userId: string): Promise<({
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
export declare function createMatch(teamId: string, userId: string, input: CreateMatchInput): Promise<{
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
export declare function deleteMatch(matchId: string, userId: string): Promise<{
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
export declare function setMatchStatus(matchId: string, userId: string, status: 'IN_PROGRESS' | 'FINISHED'): Promise<object>;
export interface RecordEventInput {
    playerId: string;
    secondaryPlayerId?: string;
    actionType: string;
    minute: number;
    videoTimestampSeconds?: number;
    period?: number;
    scoreUsAtEvent?: number;
    scoreThemAtEvent?: number;
}
export declare function recordEvent(matchId: string, userId: string, input: RecordEventInput): Promise<{
    status: string;
}>;
export declare function undoLastEvent(matchId: string, userId: string): Promise<{
    status: string;
}>;
export interface ArchivePointInput {
    lineup: string[];
    whoScored: 'US' | 'THEM';
    startMode: 'OFFENSE' | 'DEFENSE';
    durationSeconds?: number;
}
export declare function archivePoint(matchId: string, userId: string, input: ArchivePointInput): Promise<{
    status: string;
}>;
export interface UpdateMatchInput {
    youtubeVideoId?: string;
    opponentName?: string;
}
export declare function updateMatch(matchId: string, userId: string, input: UpdateMatchInput): Promise<{
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
export declare function getMatchDetail(matchId: string, userId: string): Promise<{
    match: ({
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
    }) | null;
    events: {
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
    }[];
    playerStats: ({
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
    })[];
}>;
//# sourceMappingURL=matchService.d.ts.map