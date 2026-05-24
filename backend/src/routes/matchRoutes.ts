import { Router } from 'express';
import * as matchController from '../controllers/matchController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const teamMatchRoutes = Router();
teamMatchRoutes.use(authMiddleware);
teamMatchRoutes.get('/:teamId/matches', matchController.listMatches);
teamMatchRoutes.post('/:teamId/matches', matchController.createMatch);

export const matchRoutes = Router();
matchRoutes.use(authMiddleware);
matchRoutes.get('/:id', matchController.getMatch);
