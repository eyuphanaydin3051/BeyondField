import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

// Shared Prisma client singleton. All repositories should import this rather
// than constructing their own PrismaClient (stateless server, one pool only).
export const prisma = new PrismaClient({
  adapter: new PrismaPg(process.env['DATABASE_URL'] as string),
});
