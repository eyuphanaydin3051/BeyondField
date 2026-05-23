import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Role } from '../generated/prisma/client';
import * as userRepository from '../repositories/userRepository';

const SALT_ROUNDS = 12;

function generateToken(payload: { userId: string; email: string; role: Role }): string {
  const secret = process.env['JWT_SECRET'];
  const expiresIn = process.env['JWT_EXPIRES_IN'] ?? '7d';

  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set');
  }

  return jwt.sign(payload, secret, { expiresIn } as jwt.SignOptions);
}

export async function register(email: string, password: string, role: Role) {
  const existing = await userRepository.findByEmail(email);

  if (existing) {
    const err = new Error('Email already in use') as Error & { statusCode?: number };
    err.statusCode = 400;
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
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

export async function login(email: string, password: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    const err = new Error('Invalid credentials') as Error & { statusCode?: number };
    err.statusCode = 401;
    throw err;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    const err = new Error('Invalid credentials') as Error & { statusCode?: number };
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
