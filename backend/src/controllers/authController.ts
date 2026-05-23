import { Request, Response } from 'express';
import { Role } from '../generated/prisma/client';
import * as authService from '../services/authService';

type AppError = Error & { statusCode?: number };

export async function register(req: Request, res: Response): Promise<void> {
  const { email, password, role } = req.body as {
    email: string;
    password: string;
    role: Role;
  };

  try {
    const result = await authService.register(email, password, role);
    res.status(201).json({ status: 'success', data: result });
  } catch (err) {
    const appErr = err as AppError;
    const statusCode = appErr.statusCode ?? 500;
    res.status(statusCode).json({ status: 'error', message: appErr.message });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const result = await authService.login(email, password);
    res.status(200).json({ status: 'success', data: result });
  } catch (err) {
    const appErr = err as AppError;
    const statusCode = appErr.statusCode ?? 500;
    res.status(statusCode).json({ status: 'error', message: appErr.message });
  }
}
