"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        res.status(401).json({ status: 'error', message: 'Missing or invalid Authorization header' });
        return;
    }
    const token = header.slice('Bearer '.length).trim();
    const secret = process.env['JWT_SECRET'];
    if (!secret) {
        res.status(500).json({ status: 'error', message: 'JWT_SECRET not configured' });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = { userId: decoded.userId, email: decoded.email, role: decoded.role };
        next();
    }
    catch {
        res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
    }
}
//# sourceMappingURL=authMiddleware.js.map