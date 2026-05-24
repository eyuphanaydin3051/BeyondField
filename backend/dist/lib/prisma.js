"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
// Shared Prisma client singleton. All repositories should import this rather
// than constructing their own PrismaClient (stateless server, one pool only).
exports.prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg(process.env['DATABASE_URL']),
});
//# sourceMappingURL=prisma.js.map