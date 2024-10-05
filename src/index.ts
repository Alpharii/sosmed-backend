import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
