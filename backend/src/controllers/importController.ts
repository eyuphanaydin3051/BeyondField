import { Request, Response } from 'express';
import { importDiscBase } from '../services/importService';

type AppError = Error & { statusCode?: number };

export async function importDiscBaseHandler(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const file = req.file;

    if (!file) {
      res.status(400).json({ status: 'error', message: 'No file uploaded' });
      return;
    }

    const result = await importDiscBase(teamId, userId, file.buffer);
    res.status(200).json({ status: 'success', data: result });
  } catch (err) {
    const e = err as AppError;
    res.status(e.statusCode ?? 500).json({ status: 'error', message: e.message ?? 'Internal error' });
  }
}
