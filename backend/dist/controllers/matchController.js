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
exports.listMatches = listMatches;
exports.createMatch = createMatch;
exports.updateMatch = updateMatch;
exports.deleteMatch = deleteMatch;
exports.getMatch = getMatch;
exports.startMatch = startMatch;
exports.finishMatch = finishMatch;
exports.recordEvent = recordEvent;
exports.undoLastEvent = undoLastEvent;
exports.archivePoint = archivePoint;
const matchService = __importStar(require("../services/matchService"));
function fail(res, err) {
    const e = err;
    res
        .status(e.statusCode ?? 500)
        .json({ status: 'error', message: e.message ?? 'Internal error' });
}
async function listMatches(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const items = await matchService.listMatches(teamId, userId);
        res.status(200).json({ status: 'success', data: items });
    }
    catch (e) {
        fail(res, e);
    }
}
async function createMatch(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const match = await matchService.createMatch(teamId, userId, req.body);
        res.status(201).json({ status: 'success', data: match });
    }
    catch (e) {
        fail(res, e);
    }
}
async function updateMatch(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.updateMatch(id, userId, req.body);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function deleteMatch(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        await matchService.deleteMatch(id, userId);
        res.status(204).send();
    }
    catch (e) {
        fail(res, e);
    }
}
async function getMatch(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.getMatchDetail(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function startMatch(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.setMatchStatus(id, userId, 'IN_PROGRESS');
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function finishMatch(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.setMatchStatus(id, userId, 'FINISHED');
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function recordEvent(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.recordEvent(id, userId, req.body);
        res.status(201).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function undoLastEvent(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.undoLastEvent(id, userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function archivePoint(req, res) {
    try {
        const userId = req.user.userId;
        const id = req.params['id'];
        const data = await matchService.archivePoint(id, userId, req.body);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
//# sourceMappingURL=matchController.js.map