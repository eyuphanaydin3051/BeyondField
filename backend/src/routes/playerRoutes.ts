import { Router } from 'express';
import * as playerController from '../controllers/playerController';
import { authMiddleware } from '../middlewares/authMiddleware';

// Two route groups: team-scoped (list/create/leaderboard) and player-id-scoped
// (update/delete). server.ts mounts them on different base paths.

export const teamPlayerRoutes = Router();
teamPlayerRoutes.use(authMiddleware);
teamPlayerRoutes.get('/:teamId/players', playerController.listPlayers);
teamPlayerRoutes.post('/:teamId/players', playerController.createPlayer);
teamPlayerRoutes.get('/:teamId/leaderboard', playerController.leaderboard);

export const playerRoutes = Router();
playerRoutes.use(authMiddleware);
playerRoutes.put('/:id', playerController.updatePlayer);
playerRoutes.delete('/:id', playerController.deletePlayer);
