"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const teamRoutes_1 = __importStar(require("./routes/teamRoutes"));
const playerRoutes_1 = require("./routes/playerRoutes");
const tournamentRoutes_1 = require("./routes/tournamentRoutes");
const matchRoutes_1 = require("./routes/matchRoutes");
const importRoutes_1 = __importDefault(require("./routes/importRoutes"));
const settingsRoutes_1 = __importDefault(require("./routes/settingsRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env['PORT'] ?? 3000;
// --- Middleware ---
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// --- Auth Routes ---
app.use('/api/auth', authRoutes_1.default);
// Team-scoped collection routes (player/tournament/match) MUST be mounted
// before the generic teamRoutes so they take precedence on /:teamId/* paths.
app.use('/api/teams', playerRoutes_1.teamPlayerRoutes);
app.use('/api/teams', tournamentRoutes_1.teamTournamentRoutes);
app.use('/api/teams', matchRoutes_1.teamMatchRoutes);
app.use('/api/teams', teamRoutes_1.teamExportRoutes);
app.use('/api/teams', teamRoutes_1.default);
app.use('/api/players', playerRoutes_1.playerRoutes);
app.use('/api/tournaments', tournamentRoutes_1.tournamentRoutes);
app.use('/api/matches', matchRoutes_1.matchRoutes);
app.use('/api/teams', importRoutes_1.default);
app.use('/api/me/settings', settingsRoutes_1.default);
// --- Health Check ---
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env['NODE_ENV'] ?? 'development',
    });
});
// --- 404 Handler ---
app.use((_req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found',
    });
});
// --- Global Error Handler ---
app.use((err, _req, res, _next) => {
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
exports.default = app;
//# sourceMappingURL=server.js.map