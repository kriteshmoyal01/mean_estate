import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'Api route is working!',
  });
};
