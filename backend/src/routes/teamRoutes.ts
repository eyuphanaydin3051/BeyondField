import { Router } from 'express';
import * as teamController from '../controllers/teamController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', teamController.listTeams);
router.post('/', teamController.createTeam);

// CSV export — mounted on the team-scoped router so the path becomes
// GET /api/teams/:teamId/export/players.csv
export const teamExportRoutes = Router();
teamExportRoutes.use(authMiddleware);
teamExportRoutes.get('/:teamId/export/players.csv', teamController.exportPlayersCsv);

export default router;
