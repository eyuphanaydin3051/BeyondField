import { Role } from '../generated/prisma/client';
export declare function register(email: string, password: string, role: Role): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        role: Role;
    };
}>;
export declare function login(email: string, password: string): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        role: Role;
    };
}>;
//# sourceMappingURL=authService.d.ts.map