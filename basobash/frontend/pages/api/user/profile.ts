import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateToken } from '../../../lib/authMiddleware';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

// Protect the API route with the middleware
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  authenticateToken(req, res, async () => {
    try {
      const userId = req.user?.userId;  // Safely access the userId

      if (!userId) {
        return res.status(400).json({ error: 'User not found' });
      }

      await dbConnect();
      const user = await User.findById(userId).select('-password'); // Fetch user details, excluding the password field
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user); // Send the user data as a response
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
