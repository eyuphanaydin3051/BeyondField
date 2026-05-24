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
exports.getSettings = getSettings;
exports.updateSettings = updateSettings;
const settingsService = __importStar(require("../services/settingsService"));
function fail(res, err) {
    const e = err;
    res
        .status(e.statusCode ?? 500)
        .json({ status: 'error', message: e.message ?? 'Internal error' });
}
async function getSettings(req, res) {
    try {
        const userId = req.user.userId;
        const data = await settingsService.getOrCreateSettings(userId);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
async function updateSettings(req, res) {
    try {
        const userId = req.user.userId;
        const data = await settingsService.updateSettings(userId, req.body);
        res.status(200).json({ status: 'success', data });
    }
    catch (e) {
        fail(res, e);
    }
}
//# sourceMappingURL=settingsController.js.map