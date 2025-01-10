// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

const SECRET_KEY = process.env.SECRET_KEY || '439E72DA84'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { phone, password } = req.body;

    try {
        await dbConnect();

        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Generated Token:', token); // Log the token to check if it's created correctly


        // Ensure proper Content-Type header for JSON response
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        console.log('Request Body:', req.body); // Check if the body has the correct data
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
