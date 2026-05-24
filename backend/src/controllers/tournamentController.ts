import { Request, Response } from 'express';
import * as tournamentService from '../services/tournamentService';

type AppError = Error & { statusCode?: number };

function fail(res: Response, err: unknown) {
  const e = err as AppError;
  res
    .status(e.statusCode ?? 500)
    .json({ status: 'error', message: e.message ?? 'Internal error' });
}

export async function listTournaments(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const items = await tournamentService.listTournaments(teamId, userId);
    res.status(200).json({ status: 'success', data: items });
  } catch (e) {
    fail(res, e);
  }
}

export async function createTournament(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const item = await tournamentService.createTournament(
      teamId,
      userId,
      req.body,
    );
    res.status(201).json({ status: 'success', data: item });
  } catch (e) {
    fail(res, e);
  }
}

export async function getTournamentDetail(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await tournamentService.getTournamentDetail(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function updateTournament(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const item = await tournamentService.updateTournament(id, userId, req.body);
    res.status(200).json({ status: 'success', data: item });
  } catch (e) {
    fail(res, e);
  }
}

export async function deleteTournament(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    await tournamentService.deleteTournament(id, userId);
    res.status(200).json({ status: 'success' });
  } catch (e) {
    fail(res, e);
  }
}

export async function getRoster(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await tournamentService.getTournamentRoster(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function addToRoster(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const { playerId, jerseyOverride } = req.body as {
      playerId: string;
      jerseyOverride?: number | null;
    };
    if (!playerId) {
      res.status(400).json({ status: 'error', message: 'playerId is required' });
      return;
    }
    const data = await tournamentService.addToRoster(
      id,
      userId,
      playerId,
      jerseyOverride,
    );
    res.status(201).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function removeFromRoster(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const playerId = req.params['playerId'] as string;
    await tournamentService.removeFromRoster(id, userId, playerId);
    res.status(200).json({ status: 'success' });
  } catch (e) {
    fail(res, e);
  }
}
