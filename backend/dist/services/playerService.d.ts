import { PlayerPosition } from '../generated/prisma/enums';
export interface CreatePlayerInput {
    firstName: string;
    lastName: string;
    position: string;
    jerseyNumber: number;
    photoUrl?: string | null;
}
export interface UpdatePlayerInput {
    firstName?: string;
    lastName?: string;
    position?: string;
    jerseyNumber?: number;
    photoUrl?: string | null;
}
export declare function listPlayers(teamId: string, userId: string, filters?: {
    search?: string;
    position?: string;
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
export declare function createPlayer(teamId: string, userId: string, input: CreatePlayerInput): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function updatePlayer(playerId: string, userId: string, input: UpdatePlayerInput): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function deletePlayer(playerId: string, userId: string): Promise<{
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
}>;
export declare function getCareerStats(playerId: string, userId: string): Promise<object>;
export declare function getPassNetwork(playerId: string, userId: string): Promise<object[]>;
//# sourceMappingURL=playerService.d.ts.map