import 'dotenv/config';
import { Role } from '../generated/prisma/client';
export declare function findByEmail(email: string): Promise<{
    id: string;
    email: string;
    passwordHash: string;
    role: Role;
    createdAt: Date;
} | null>;
export declare function createUser(data: {
    email: string;
    passwordHash: string;
    role: Role;
}): Promise<{
    id: string;
    email: string;
    passwordHash: string;
    role: Role;
    createdAt: Date;
}>;
//# sourceMappingURL=userRepository.d.ts.map