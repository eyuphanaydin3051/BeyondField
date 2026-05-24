import { Request, Response } from 'express';
export declare function listMatches(req: Request, res: Response): Promise<void>;
export declare function createMatch(req: Request, res: Response): Promise<void>;
export declare function updateMatch(req: Request, res: Response): Promise<void>;
export declare function deleteMatch(req: Request, res: Response): Promise<void>;
export declare function getMatch(req: Request, res: Response): Promise<void>;
export declare function startMatch(req: Request, res: Response): Promise<void>;
export declare function finishMatch(req: Request, res: Response): Promise<void>;
export declare function recordEvent(req: Request, res: Response): Promise<void>;
export declare function undoLastEvent(req: Request, res: Response): Promise<void>;
export declare function archivePoint(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=matchController.d.ts.map