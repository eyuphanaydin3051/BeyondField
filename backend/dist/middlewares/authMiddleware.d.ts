import { Request, Response, NextFunction } from 'express';
import { Role } from '../generated/prisma/client';
export interface AuthPayload {
    userId: string;
    email: string;
    role: Role;
}
declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=authMiddleware.d.ts.map