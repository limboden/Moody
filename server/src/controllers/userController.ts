import { Request, Response } from 'express';
import { User } from '../models/index';
import bcrypt from 'bcrypt';  // For password hashing

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, first_name, last_name, password, email, location, bio } = req.body;
        
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await User.create({
            username,
            first_name,
            last_name,
            password: hashedPassword,
            email,
            location,
            bio,
        });
        
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error:any) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Get all users
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error:any) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};
