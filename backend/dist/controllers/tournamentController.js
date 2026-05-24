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
exports.listTournaments = listTournaments;
exports.createTournament = createTournament;
exports.getTournamentDetail = getTournamentDetail;
exports.updateTournament = updateTournament;
exports.deleteTournament = deleteTournament;
exports.getRoster = getRoster;
exports.addToRoster = addToRoster;
exports.removeFromRoster = removeFromRoster;
const tournamentService = __importStar(require("../services/tournamentService"));
function fail(res, err) {
    const e = err;
    res
        .status(e.statusCode ?? 500)
        .json({ status: 'error', message: e.message ?? 'Internal error' });
}
async function listTournaments(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const items = await tournamentService.listTournaments(teamId, userId);
        res.status(200).json({ status: 'success', data: items });
    }
    catch (e) {
        fail(res, e);
    }
}
async function createTournament(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const item = await tournamentService.createTournament(teamId, userId, req.body);
        res.status(201).json({ status: 'success', data: item });
    }
    catch (e) {
        fail(res, e);
    }
}
async function getTournamentDetail(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await tournamentService.getTournamentDetail(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function updateTournament(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const item = await tournamentService.updateTournament(id, userId, req.body);
        res.status(200).json({ status: 'success', data: item });
    }
    catch (e) {
        fail(res, e);
    }
}
async function deleteTournament(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        await tournamentService.deleteTournament(id, userId);
        res.status(200).json({ status: 'success' });
    }
    catch (e) {
        fail(res, e);
    }
}
async function getRoster(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await tournamentService.getTournamentRoster(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function addToRoster(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const { playerId, jerseyOverride } = req.body;
        if (!playerId) {
            res.status(400).json({ status: 'error', message: 'playerId is required' });
            return;
        }
        const data = await tournamentService.addToRoster(id, userId, playerId, jerseyOverride);
        res.status(201).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function removeFromRoster(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const playerId = req.params['playerId'];
        await tournamentService.removeFromRoster(id, userId, playerId);
        res.status(200).json({ status: 'success' });
    }
    catch (e) {
        fail(res, e);
    }
}
//# sourceMappingURL=tournamentController.js.map