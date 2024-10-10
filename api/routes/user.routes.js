import express from 'express';
// import { deleteUser, test, updateUser, getUserListings, getUser } from '../controller/user.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';
import { test } from '../controller/user.controller.js';

const router = express.Router();

// Basic test route
router.get('/test', test);

// Update, delete, and get user-related routes, protected by `verifyToken`
// router.post('/update/:id',  updateUser);
// router.delete('/delete/:id',  deleteUser);
// router.get('/listings/:id', getUserListings);
// router.get('/:id', getUser);

export default router;
