"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const importController_1 = require("../controllers/importController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });
const importRouter = (0, express_1.Router)();
importRouter.post('/:teamId/import/discbase', authMiddleware_1.authMiddleware, upload.single('file'), importController_1.importDiscBaseHandler);
exports.default = importRouter;
//# sourceMappingURL=importRoutes.js.map