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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPlayers = listPlayers;
exports.createPlayer = createPlayer;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;
exports.getCareerStats = getCareerStats;
exports.getPassNetwork = getPassNetwork;
exports.leaderboard = leaderboard;
const playerService = __importStar(require("../services/playerService"));
const statService = __importStar(require("../services/statService"));
function fail(res, err) {
    const e = err;
    res
        .status(e.statusCode ?? 500)
        .json({ status: 'error', message: e.message ?? 'Internal error' });
}
async function listPlayers(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const search = req.query['search'] || undefined;
        const position = req.query['position'] || undefined;
        const players = await playerService.listPlayers(teamId, userId, {
            search,
            position,
        });
        res.status(200).json({ status: 'success', data: players });
    }
    catch (e) {
        fail(res, e);
    }
}
async function createPlayer(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const player = await playerService.createPlayer(teamId, userId, req.body);
        res.status(201).json({ status: 'success', data: player });
    }
    catch (e) {
        fail(res, e);
    }
}
async function updatePlayer(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const player = await playerService.updatePlayer(id, userId, req.body);
        res.status(200).json({ status: 'success', data: player });
    }
    catch (e) {
        fail(res, e);
    }
}
async function deletePlayer(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        await playerService.deletePlayer(id, userId);
        res.status(200).json({ status: 'success' });
    }
    catch (e) {
        fail(res, e);
    }
}
async function getCareerStats(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await playerService.getCareerStats(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function getPassNetwork(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await playerService.getPassNetwork(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function leaderboard(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const sortBy = req.query['sortBy'] ?? 'goals';
        const mode = req.query['mode'] ?? 'TOTAL';
        const rows = await statService.computeLeaderboard(teamId, userId, sortBy, mode);
        res
            .status(200)
            .json({ status: 'success', data: { sortBy, mode, rows } });
    }
    catch (e) {
        fail(res, e);
    }
}
//# sourceMappingURL=playerController.js.map