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
exports.computeLeaderboard = computeLeaderboard;
const statRepository = __importStar(require("../repositories/statRepository"));
const teamAuthorization_1 = require("./teamAuthorization");
function err(status, message) {
    const e = new Error(message);
    e.statusCode = status;
    return e;
}
const VALID_SORT = [
    'goals',
    'assists',
    'blocks',
    'throwaways',
    'drops',
    'callahans',
    'completions',
    'plusMinus',
    'pointsPlayed',
    'matchesPlayed',
];
const VALID_MODES = ['TOTAL', 'PER_MATCH', 'PER_POINT'];
async function computeLeaderboard(teamId, userId, sortBy, mode) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    if (!VALID_SORT.includes(sortBy)) {
        throw err(400, `Invalid sortBy. Allowed: ${VALID_SORT.join(', ')}`);
    }
    if (!VALID_MODES.includes(mode)) {
        throw err(400, `Invalid mode. Allowed: ${VALID_MODES.join(', ')}`);
    }
    const key = sortBy;
    const modeKey = mode;
    const players = await statRepository.findStatsByTeam(teamId);
    const rows = players.map((p) => {
        const s = p.stats;
        const raw = (s ? s[key] : 0);
        const matches = s?.matchesPlayed ?? 0;
        const points = s?.pointsPlayed ?? 0;
        let display = raw;
        if (modeKey === 'PER_MATCH') {
            display = matches > 0 ? raw / matches : 0;
        }
        else if (modeKey === 'PER_POINT') {
            display = points > 0 ? raw / points : 0;
        }
        return {
            playerId: p.id,
            firstName: p.firstName,
            lastName: p.lastName,
            jerseyNumber: p.jerseyNumber,
            position: p.position,
            matchesPlayed: matches,
            pointsPlayed: points,
            rawValue: raw,
            displayValue: display,
        };
    });
    rows.sort((a, b) => b.displayValue - a.displayValue);
    return rows;
}
//# sourceMappingURL=statService.js.map