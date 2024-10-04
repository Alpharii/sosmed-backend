// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/users', userRoutes(prisma)); // Menggunakan router untuk user

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
