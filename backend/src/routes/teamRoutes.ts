import { Router } from 'express';
import * as teamController from '../controllers/teamController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', teamController.listTeams);
router.post('/', teamController.createTeam);

export default router;
