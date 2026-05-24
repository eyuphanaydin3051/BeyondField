export declare function findTournamentsByTeam(teamId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}[]>;
export declare function findTournamentById(id: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
} | null>;
export declare function findByTeamAndName(teamId: string, name: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
} | null>;
export declare function createTournament(data: {
    name: string;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function updateTournament(id: string, data: Partial<{
    name: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function deleteTournament(id: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    sportType: import("../generated/prisma/enums").SportType;
    ownerTeamId: string;
    startDate: Date;
    endDate: Date | null;
    location: string | null;
}>;
export declare function findRosterByTournament(tournamentId: string): Promise<({
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
export declare function findRosterPlayer(tournamentId: string, playerId: string): Promise<{
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
} | null>;
export declare function addPlayerToRoster(tournamentId: string, playerId: string, jerseyOverride?: number | null): Promise<{
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
export declare function removePlayerFromRoster(tournamentId: string, playerId: string): Promise<{
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
}>;
//# sourceMappingURL=tournamentRepository.d.ts.map