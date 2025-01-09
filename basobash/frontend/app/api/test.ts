import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect();
        res.status(200).json({ message: 'Successfully connected to MongoDB!' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: 'Error connecting to MongoDB', details: err.message });
    }
    
}
