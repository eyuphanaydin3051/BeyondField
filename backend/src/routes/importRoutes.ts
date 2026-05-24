import { Router } from 'express';
import multer from 'multer';
import { importDiscBaseHandler } from '../controllers/importController';
import { authMiddleware } from '../middlewares/authMiddleware';

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

const importRouter = Router();

importRouter.post(
  '/:teamId/import/discbase',
  authMiddleware,
  upload.single('file'),
  importDiscBaseHandler,
);

export default importRouter;
