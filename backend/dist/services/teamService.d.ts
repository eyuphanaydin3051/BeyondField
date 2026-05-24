export declare function listTeams(userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    logoUrl: string | null;
    inviteCode: string | null;
    ownerId: string;
    sportType: import("../generated/prisma/enums").SportType;
}[]>;
export declare function createTeam(userId: string, name: string, logoUrl?: string | null): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    logoUrl: string | null;
    inviteCode: string | null;
    ownerId: string;
    sportType: import("../generated/prisma/enums").SportType;
}>;
export declare function buildPlayersCsv(teamId: string, userId: string): Promise<string>;
//# sourceMappingURL=teamService.d.ts.map