export declare function findTeamsByOwner(ownerId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    logoUrl: string | null;
    inviteCode: string | null;
    ownerId: string;
    sportType: import("../generated/prisma/enums").SportType;
}[]>;
export declare function createTeam(data: {
    name: string;
    logoUrl: string | null;
    ownerId: string;
}): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    logoUrl: string | null;
    inviteCode: string | null;
    ownerId: string;
    sportType: import("../generated/prisma/enums").SportType;
}>;
//# sourceMappingURL=teamRepository.d.ts.map