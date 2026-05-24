/**
 * Ensures `userId` owns the team referenced by `teamId`.
 * Throws 403/404 otherwise.
 */
export declare function assertTeamOwnership(teamId: string, userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    logoUrl: string | null;
    inviteCode: string | null;
    ownerId: string;
    sportType: import("../generated/prisma/enums").SportType;
}>;
/** Walks player -> team and checks ownership. */
export declare function assertPlayerOwnership(playerId: string, userId: string): Promise<{
    team: {
        id: string;
        createdAt: Date;
        name: string;
        logoUrl: string | null;
        inviteCode: string | null;
        ownerId: string;
        sportType: import("../generated/prisma/enums").SportType;
    };
} & {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: import("../generated/prisma/enums").PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function assertTournamentOwnership(tournamentId: string, userId: string): Promise<{
    ownerTeam: {
        id: string;
        createdAt: Date;
        name: string;
        logoUrl: string | null;
        inviteCode: string | null;
        ownerId: string;
        sportType: import("../generated/prisma/enums").SportType;
    };
} & {
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function assertMatchOwnership(matchId: string, userId: string): Promise<{
    homeTeam: {
        id: string;
        createdAt: Date;
        name: string;
        logoUrl: string | null;
        inviteCode: string | null;
        ownerId: string;
        sportType: import("../generated/prisma/enums").SportType;
    };
    awayTeam: {
        id: string;
        createdAt: Date;
        name: string;
        logoUrl: string | null;
        inviteCode: string | null;
        ownerId: string;
        sportType: import("../generated/prisma/enums").SportType;
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
    status: import("../generated/prisma/enums").MatchStatus;
    homeScore: number;
    awayScore: number;
    youtubeVideoId: string | null;
    durationSeconds: number | null;
    finished: boolean;
}>;
//# sourceMappingURL=teamAuthorization.d.ts.map