// pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateToken } from '../../lib/authMiddleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply the middleware to protect this route
    authenticateToken(req, res, () => {
        // This will only be executed if the token is valid
        res.status(200).json({ message: 'Protected content accessed!' });
    });
}
