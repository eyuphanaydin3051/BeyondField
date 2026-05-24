import { Request, Response } from 'express';
import * as settingsService from '../services/settingsService';

type AppError = Error & { statusCode?: number };

function fail(res: Response, err: unknown): void {
  const e = err as AppError;
  res
    .status(e.statusCode ?? 500)
    .json({ status: 'error', message: e.message ?? 'Internal error' });
}

export async function getSettings(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const data = await settingsService.getOrCreateSettings(userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function updateSettings(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const data = await settingsService.updateSettings(userId, req.body);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}
