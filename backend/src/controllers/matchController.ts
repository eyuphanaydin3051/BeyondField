import { Request, Response } from 'express';
import * as matchService from '../services/matchService';

type AppError = Error & { statusCode?: number };

function fail(res: Response, err: unknown) {
  const e = err as AppError;
  res
    .status(e.statusCode ?? 500)
    .json({ status: 'error', message: e.message ?? 'Internal error' });
}

export async function listMatches(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const items = await matchService.listMatches(teamId, userId);
    res.status(200).json({ status: 'success', data: items });
  } catch (e) {
    fail(res, e);
  }
}

export async function createMatch(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const match = await matchService.createMatch(teamId, userId, req.body);
    res.status(201).json({ status: 'success', data: match });
  } catch (e) {
    fail(res, e);
  }
}

export async function deleteMatch(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    await matchService.deleteMatch(id, userId);
    res.status(204).send();
  } catch (e) {
    fail(res, e);
  }
}

export async function getMatch(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.getMatchDetail(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function startMatch(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.setMatchStatus(id, userId, 'IN_PROGRESS');
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function finishMatch(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.setMatchStatus(id, userId, 'FINISHED');
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function recordEvent(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.recordEvent(id, userId, req.body);
    res.status(201).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function undoLastEvent(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.undoLastEvent(id, userId);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}

export async function archivePoint(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const id = req.params['id'] as string;
    const data = await matchService.archivePoint(id, userId, req.body);
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    fail(res, e);
  }
}
