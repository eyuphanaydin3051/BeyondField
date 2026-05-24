import type { PlayerPosition } from '../generated/prisma/enums';
export declare function findPlayersByTeam(teamId: string, filters?: {
    search?: string;
    position?: PlayerPosition;
}): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}[]>;
export declare function findPlayerById(id: string): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
} | null>;
export declare function findByTeamAndJersey(teamId: string, jerseyNumber: number): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
} | null>;
export declare function createPlayer(data: {
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function updatePlayer(id: string, data: Partial<{
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
}>): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function deletePlayer(id: string): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
//# sourceMappingURL=playerRepository.d.ts.map