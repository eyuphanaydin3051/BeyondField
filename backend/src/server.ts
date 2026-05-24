import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import teamRoutes, { teamExportRoutes } from './routes/teamRoutes';
import { teamPlayerRoutes, playerRoutes } from './routes/playerRoutes';
import {
  teamTournamentRoutes,
  tournamentRoutes,
} from './routes/tournamentRoutes';
import { teamMatchRoutes, matchRoutes } from './routes/matchRoutes';
import importRouter from './routes/importRoutes';
import settingsRoutes from './routes/settingsRoutes';

dotenv.config();

const app = express();
const PORT = process.env['PORT'] ?? 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Auth Routes ---
app.use('/api/auth', authRoutes);
// Team-scoped collection routes (player/tournament/match) MUST be mounted
// before the generic teamRoutes so they take precedence on /:teamId/* paths.
app.use('/api/teams', teamPlayerRoutes);
app.use('/api/teams', teamTournamentRoutes);
app.use('/api/teams', teamMatchRoutes);
app.use('/api/teams', teamExportRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/teams', importRouter);
app.use('/api/me/settings', settingsRoutes);

// --- Health Check ---
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env['NODE_ENV'] ?? 'development',
  });
});

// --- 404 Handler ---
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

// --- Global Error Handler ---
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[ERROR]', err.message);
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`[SERVER] BeyondField backend running on port ${PORT}`);
  console.log(`[SERVER] Environment: ${process.env['NODE_ENV'] ?? 'development'}`);
});

export default app;
