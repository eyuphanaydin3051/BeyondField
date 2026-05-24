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
exports.buildPlayersCsv = buildPlayersCsv;
const prisma_1 = require("../lib/prisma");
const teamRepository = __importStar(require("../repositories/teamRepository"));
const teamAuthorization_1 = require("./teamAuthorization");
async function listTeams(userId) {
    return teamRepository.findTeamsByOwner(userId);
}
async function createTeam(userId, name, logoUrl) {
    const trimmed = name?.trim();
    if (!trimmed) {
        const err = new Error('Team name is required');
        err.statusCode = 400;
        throw err;
    }
    return teamRepository.createTeam({
        name: trimmed,
        logoUrl: logoUrl?.trim() ? logoUrl.trim() : null,
        ownerId: userId,
    });
}
// ---------------------------------------------------------------------------
// CSV export
// ---------------------------------------------------------------------------
function escapeCsvField(value) {
    const str = value === null || value === undefined ? '' : String(value);
    // Wrap in quotes if the value contains a comma, quote, or newline
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}
async function buildPlayersCsv(teamId, userId) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    const players = await prisma_1.prisma.player.findMany({
        where: { teamId },
        include: { stats: true },
        orderBy: { jerseyNumber: 'asc' },
    });
    const HEADERS = [
        'jersey_number',
        'first_name',
        'last_name',
        'position',
        'matches_played',
        'points_played',
        'goals',
        'assists',
        'blocks',
        'throwaways',
        'drops',
        'callahans',
        'completions',
        'successful_passes',
        'pull_attempts',
        'successful_pulls',
        'plus_minus',
    ];
    const rows = [HEADERS.join(',')];
    for (const player of players) {
        const s = player.stats;
        const row = [
            escapeCsvField(player.jerseyNumber),
            escapeCsvField(player.firstName),
            escapeCsvField(player.lastName),
            escapeCsvField(player.position),
            escapeCsvField(s?.matchesPlayed ?? 0),
            escapeCsvField(s?.pointsPlayed ?? 0),
            escapeCsvField(s?.goals ?? 0),
            escapeCsvField(s?.assists ?? 0),
            escapeCsvField(s?.blocks ?? 0),
            escapeCsvField(s?.throwaways ?? 0),
            escapeCsvField(s?.drops ?? 0),
            escapeCsvField(s?.callahans ?? 0),
            escapeCsvField(s?.completions ?? 0),
            escapeCsvField(s?.successfulPasses ?? 0),
            escapeCsvField(s?.pullAttempts ?? 0),
            escapeCsvField(s?.successfulPulls ?? 0),
            escapeCsvField(s?.plusMinus ?? 0),
        ];
        rows.push(row.join(','));
    }
    return rows.join('\r\n');
}
//# sourceMappingURL=teamService.js.map