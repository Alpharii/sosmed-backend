import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';
import { PrismaClient } from '@prisma/client';

const router = Router();

export default (prisma: PrismaClient) => {
  router.post('/', (req, res) => createUser(req, res, prisma));
  router.get('/', (req, res) => getAllUsers(req, res, prisma));
  
  return router;
};
