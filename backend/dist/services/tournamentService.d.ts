export interface CreateTournamentInput {
    name: string;
    startDate: string;
    endDate?: string | null;
    location?: string | null;
}
export interface UpdateTournamentInput {
    name?: string;
    startDate?: string;
    endDate?: string | null;
    location?: string | null;
}
export declare function listTournaments(teamId: string, userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}[]>;
export declare function createTournament(teamId: string, userId: string, input: CreateTournamentInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function updateTournament(tournamentId: string, userId: string, input: UpdateTournamentInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function deleteTournament(tournamentId: string, userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function getTournamentRoster(tournamentId: string, userId: string): Promise<({
    player: {
        id: string;
        firstName: string;
        lastName: string;
        position: import("../generated/prisma/enums").PlayerPosition;
        jerseyNumber: number;
        photoUrl: string | null;
    };
} & {
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
})[]>;
export declare function addToRoster(tournamentId: string, userId: string, playerId: string, jerseyOverride?: number | null): Promise<{
    player: {
        id: string;
        firstName: string;
        lastName: string;
        position: import("../generated/prisma/enums").PlayerPosition;
        jerseyNumber: number;
        photoUrl: string | null;
    };
} & {
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
}>;
export declare function removeFromRoster(tournamentId: string, userId: string, playerId: string): Promise<{
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
}>;
export declare function getTournamentDetail(tournamentId: string, userId: string): Promise<{
    tournament: {
        ownerTeam: {
            id: string;
            name: string;
            logoUrl: string | null;
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
    };
    matches: ({
        homeTeam: {
            id: string;
            name: string;
        };
        awayTeam: {
            id: string;
            name: string;
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
    })[];
    roster: {
        id: string;
        firstName: string;
        lastName: string;
        position: import("../generated/prisma/enums").PlayerPosition;
        jerseyNumber: number;
        photoUrl: string | null;
    }[];
    playerStats: ({
        player: {
            id: string;
            firstName: string;
            lastName: string;
            position: import("../generated/prisma/enums").PlayerPosition;
            jerseyNumber: number;
        };
    } & {
        id: string;
        tournamentId: string;
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
        plusMinus: number;
    })[];
}>;
//# sourceMappingURL=tournamentService.d.ts.map