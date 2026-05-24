"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = findByEmail;
exports.createUser = createUser;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg(process.env['DATABASE_URL']),
});
async function findByEmail(email) {
    return prisma.user.findUnique({
        where: { email },
    });
}
async function createUser(data) {
    return prisma.user.create({
        data,
    });
}
//# sourceMappingURL=userRepository.js.map