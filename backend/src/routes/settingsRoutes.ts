import { Router } from 'express';
import * as settingsController from '../controllers/settingsController';
import { authMiddleware } from '../middlewares/authMiddleware';

const settingsRoutes = Router();
settingsRoutes.use(authMiddleware);
settingsRoutes.get('/', settingsController.getSettings);
settingsRoutes.put('/', settingsController.updateSettings);

export default settingsRoutes;
