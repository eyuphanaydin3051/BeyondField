import { Request, Response } from 'express';
import * as teamService from '../services/teamService';

type AppError = Error & { statusCode?: number };

export async function listTeams(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teams = await teamService.listTeams(userId);
    res.status(200).json({ status: 'success', data: teams });
  } catch (err) {
    const appErr = err as AppError;
    res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
  }
}

export async function createTeam(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const { name, logoUrl } = req.body as { name: string; logoUrl?: string | null };
    const team = await teamService.createTeam(userId, name, logoUrl ?? null);
    res.status(201).json({ status: 'success', data: team });
  } catch (err) {
    const appErr = err as AppError;
    res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
  }
}

export async function exportPlayersCsv(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user!.userId;
    const teamId = req.params['teamId'] as string;
    const csv = await teamService.buildPlayersCsv(teamId, userId);
    // UTF-8 BOM ensures Excel opens the file with correct encoding
    const BOM = '﻿';
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="players.csv"');
    res.status(200).send(BOM + csv);
  } catch (err) {
    const appErr = err as AppError;
    res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
  }
}
