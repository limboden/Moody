import express from 'express';
import { createUser, getUsers, getUserById } from '../controllers/userController';

const router = express.Router();

// Route for creating a user
router.post('/users', createUser);

// Route for getting all users
router.get('/users', getUsers);

// Route for getting a user by ID
router.get('/users/:id', getUserById);

export default router;
