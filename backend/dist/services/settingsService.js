"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateSettings = getOrCreateSettings;
exports.updateSettings = updateSettings;
const prisma_1 = require("../lib/prisma");
const enums_1 = require("../generated/prisma/enums");
function err(status, message) {
    const e = new Error(message);
    e.statusCode = status;
    return e;
}
const VALID_THEMES = Object.values(enums_1.Theme);
const VALID_LANGUAGES = Object.values(enums_1.Language);
const VALID_NAME_FORMATS = Object.values(enums_1.NameFormat);
const VALID_CAPTURE_MODES = Object.values(enums_1.CaptureMode);
function validateInput(input) {
    const result = {};
    if (input.theme !== undefined) {
        const v = input.theme.toUpperCase();
        if (!VALID_THEMES.includes(v)) {
            throw err(400, `Invalid theme. Allowed: ${VALID_THEMES.join(', ')}`);
        }
        result.theme = v;
    }
    if (input.language !== undefined) {
        const v = input.language.toUpperCase();
        if (!VALID_LANGUAGES.includes(v)) {
            throw err(400, `Invalid language. Allowed: ${VALID_LANGUAGES.join(', ')}`);
        }
        result.language = v;
    }
    if (input.nameFormat !== undefined) {
        const v = input.nameFormat.toUpperCase();
        if (!VALID_NAME_FORMATS.includes(v)) {
            throw err(400, `Invalid nameFormat. Allowed: ${VALID_NAME_FORMATS.join(', ')}`);
        }
        result.nameFormat = v;
    }
    if (input.defaultCaptureMode !== undefined) {
        const v = input.defaultCaptureMode.toUpperCase();
        if (!VALID_CAPTURE_MODES.includes(v)) {
            throw err(400, `Invalid defaultCaptureMode. Allowed: ${VALID_CAPTURE_MODES.join(', ')}`);
        }
        result.defaultCaptureMode = v;
    }
    return result;
}
async function getOrCreateSettings(userId) {
    return prisma_1.prisma.userSettings.upsert({
        where: { userId },
        create: {
            userId,
            theme: enums_1.Theme.DARK,
            language: enums_1.Language.TR,
            nameFormat: enums_1.NameFormat.FIRST_LAST,
            defaultCaptureMode: enums_1.CaptureMode.SIMPLE,
        },
        update: {},
    });
}
async function updateSettings(userId, input) {
    const validated = validateInput(input);
    return prisma_1.prisma.userSettings.upsert({
        where: { userId },
        create: {
            userId,
            theme: validated.theme ?? enums_1.Theme.DARK,
            language: validated.language ?? enums_1.Language.TR,
            nameFormat: validated.nameFormat ?? enums_1.NameFormat.FIRST_LAST,
            defaultCaptureMode: validated.defaultCaptureMode ?? enums_1.CaptureMode.SIMPLE,
        },
        update: validated,
    });
}
//# sourceMappingURL=settingsService.js.map