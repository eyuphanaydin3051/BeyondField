import { Router } from 'express';
import * as tournamentController from '../controllers/tournamentController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const teamTournamentRoutes = Router();
teamTournamentRoutes.use(authMiddleware);
teamTournamentRoutes.get(
  '/:teamId/tournaments',
  tournamentController.listTournaments,
);
teamTournamentRoutes.post(
  '/:teamId/tournaments',
  tournamentController.createTournament,
);

export const tournamentRoutes = Router();
tournamentRoutes.use(authMiddleware);
tournamentRoutes.put('/:id', tournamentController.updateTournament);
tournamentRoutes.delete('/:id', tournamentController.deleteTournament);
