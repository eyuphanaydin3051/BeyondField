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
exports.listTeams = listTeams;
exports.createTeam = createTeam;
exports.exportPlayersCsv = exportPlayersCsv;
const teamService = __importStar(require("../services/teamService"));
async function listTeams(req, res) {
    try {
        const userId = req.user.userId;
        const teams = await teamService.listTeams(userId);
        res.status(200).json({ status: 'success', data: teams });
    }
    catch (err) {
        const appErr = err;
        res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
    }
}
async function createTeam(req, res) {
    try {
        const userId = req.user.userId;
        const { name, logoUrl } = req.body;
        const team = await teamService.createTeam(userId, name, logoUrl ?? null);
        res.status(201).json({ status: 'success', data: team });
    }
    catch (err) {
        const appErr = err;
        res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
    }
}
async function exportPlayersCsv(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const csv = await teamService.buildPlayersCsv(teamId, userId);
        // UTF-8 BOM ensures Excel opens the file with correct encoding
        const BOM = '﻿';
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename="players.csv"');
        res.status(200).send(BOM + csv);
    }
    catch (err) {
        const appErr = err;
        res.status(appErr.statusCode ?? 500).json({ status: 'error', message: appErr.message });
    }
}
//# sourceMappingURL=teamController.js.map