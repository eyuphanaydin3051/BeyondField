"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importDiscBaseHandler = importDiscBaseHandler;
const importService_1 = require("../services/importService");
async function importDiscBaseHandler(req, res) {
    try {
        const userId = req.user.userId;
        const teamId = req.params['teamId'];
        const file = req.file;
        if (!file) {
            res.status(400).json({ status: 'error', message: 'No file uploaded' });
            return;
        }
        const result = await (0, importService_1.importDiscBase)(teamId, userId, file.buffer);
        res.status(200).json({ status: 'success', data: result });
    }
    catch (err) {
        const e = err;
        res.status(e.statusCode ?? 500).json({ status: 'error', message: e.message ?? 'Internal error' });
    }
}
//# sourceMappingURL=importController.js.map