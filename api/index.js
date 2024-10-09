import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { get } from 'http';
import userRoutes from './routes/user.routes.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then (() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log(error);
})


const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get ('/test', (req, res) => {
  res.json ({message: 'Hello World!'});
});

app.use ('/api/user',userRoutes);