import { Request, Response } from 'express';
import * as playerService from '../services/playerService';
import * as statService from '../services/statService';

type AppError = Error & { statusCode?: number };

function fail(res: Response, err: unknown) {
  const e = err as AppError;
  res
    .status(e.statusCode ?? 500)
    .json({ status: 'error', message: e.message ?? 'Internal error' });
}

export async function listPlayers(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const search = (req.query['search'] as string) || undefined;
    const position = (req.query['position'] as string) || undefined;
    const players = await playerService.listPlayers(teamId, userId, {
      search,
      position,
    });
    res.status(200).json({ status: 'success', data: players });
  } catch (e) {
    fail(res, e);
  }
}

export async function createPlayer(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const player = await playerService.createPlayer(teamId, userId, req.body);
    res.status(201).json({ status: 'success', data: player });
  } catch (e) {
    fail(res, e);
  }
}

export async function updatePlayer(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const player = await playerService.updatePlayer(id, userId, req.body);
    res.status(200).json({ status: 'success', data: player });
  } catch (e) {
    fail(res, e);
  }
}

export async function deletePlayer(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    await playerService.deletePlayer(id, userId);
    res.status(200).json({ status: 'success' });
  } catch (e) {
    fail(res, e);
  }
}

export async function getCareerStats(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await playerService.getCareerStats(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function getPassNetwork(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await playerService.getPassNetwork(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function leaderboard(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const sortBy = (req.query['sortBy'] as string) ?? 'goals';
    const mode = (req.query['mode'] as string) ?? 'TOTAL';
    const rows = await statService.computeLeaderboard(
      teamId,
      userId,
      sortBy,
      mode,
    );
    res
      .status(200)
      .json({ status: 'success', data: { sortBy, mode, rows } });
  } catch (e) {
    fail(res, e);
  }
}
