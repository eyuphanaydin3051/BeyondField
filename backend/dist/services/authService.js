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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository = __importStar(require("../repositories/userRepository"));
const SALT_ROUNDS = 12;
function generateToken(payload) {
    const secret = process.env['JWT_SECRET'];
    const expiresIn = process.env['JWT_EXPIRES_IN'] ?? '7d';
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
}
async function register(email, password, role) {
    const existing = await userRepository.findByEmail(email);
    if (existing) {
        const err = new Error('Email already in use');
        err.statusCode = 400;
        throw err;
    }
    const passwordHash = await bcrypt_1.default.hash(password, SALT_ROUNDS);
    const user = await userRepository.createUser({ email, passwordHash, role });
    const token = generateToken({ userId: user.id, email: user.email, role: user.role });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
        },
    };
}
async function login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
        const err = new Error('Invalid credentials');
        err.statusCode = 401;
        throw err;
    }
    const isValid = await bcrypt_1.default.compare(password, user.passwordHash);
    if (!isValid) {
        const err = new Error('Invalid credentials');
        err.statusCode = 401;
        throw err;
    }
    const token = generateToken({ userId: user.id, email: user.email, role: user.role });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
        },
    };
}
//# sourceMappingURL=authService.js.map