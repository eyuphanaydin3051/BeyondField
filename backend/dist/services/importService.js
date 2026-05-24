"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importDiscBase = importDiscBase;
const prisma_1 = require("../lib/prisma");
const enums_1 = require("../generated/prisma/enums");
const teamAuthorization_1 = require("./teamAuthorization");
function err(status, message) {
    const e = new Error(message);
    e.statusCode = status;
    return e;
}
function mapPosition(raw) {
    const lower = (raw ?? '').toLowerCase();
    if (lower === 'handler')
        return enums_1.PlayerPosition.HANDLER;
    if (lower === 'cutter')
        return enums_1.PlayerPosition.CUTTER;
    if (lower === 'hybrid')
        return enums_1.PlayerPosition.HYBRID;
    return enums_1.PlayerPosition.HYBRID;
}
function splitName(full) {
    const trimmed = full.trim();
    const spaceIdx = trimmed.indexOf(' ');
    if (spaceIdx === -1)
        return { firstName: trimmed, lastName: '' };
    return {
        firstName: trimmed.slice(0, spaceIdx),
        lastName: trimmed.slice(spaceIdx + 1),
    };
}
async function importDiscBase(teamId, userId, fileBuffer) {
    await (0, teamAuthorization_1.assertTeamOwnership)(teamId, userId);
    let backup;
    try {
        backup = JSON.parse(fileBuffer.toString('utf-8'));
    }
    catch {
        throw err(400, 'Invalid JSON file');
    }
    const rawPlayers = backup.players;
    if (!Array.isArray(rawPlayers) || rawPlayers.length === 0) {
        throw err(400, 'No players found in the backup file');
    }
    const existingPlayers = await prisma_1.prisma.player.findMany({
        where: { teamId },
        select: { firstName: true, lastName: true },
    });
    const existingNames = new Set(existingPlayers.map((p) => `${p.firstName} ${p.lastName}`.toLowerCase()));
    let imported = 0;
    let skipped = 0;
    for (const raw of rawPlayers) {
        if (!raw.name?.trim()) {
            skipped++;
            continue;
        }
        const { firstName, lastName } = splitName(raw.name);
        const fullKey = `${firstName} ${lastName}`.toLowerCase();
        if (existingNames.has(fullKey)) {
            skipped++;
            continue;
        }
        await prisma_1.prisma.player.create({
            data: {
                firstName,
                lastName,
                position: mapPosition(raw.position),
                jerseyNumber: typeof raw.jerseyNumber === 'number' ? raw.jerseyNumber : 0,
                teamId,
            },
        });
        existingNames.add(fullKey);
        imported++;
    }
    return { imported, skipped };
}
//# sourceMappingURL=importService.js.map