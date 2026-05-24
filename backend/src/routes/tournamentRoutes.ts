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
tournamentRoutes.get('/:id', tournamentController.getTournamentDetail);
tournamentRoutes.put('/:id', tournamentController.updateTournament);
tournamentRoutes.delete('/:id', tournamentController.deleteTournament);
tournamentRoutes.get('/:id/roster', tournamentController.getRoster);
tournamentRoutes.post('/:id/roster', tournamentController.addToRoster);
tournamentRoutes.delete(
  '/:id/roster/:playerId',
  tournamentController.removeFromRoster,
);
