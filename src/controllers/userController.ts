// src/controllers/userController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const createUser = async (req: Request, res: Response, prisma: PrismaClient) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response, prisma: PrismaClient) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
