import express from 'express';
import { signup } from '../controller/auth.controller.js';

const router = express.Router();

// Define the signup route
router.post('/signup', signup);

export default router;
