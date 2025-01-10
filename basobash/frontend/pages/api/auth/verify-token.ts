import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = '439E72DA84';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the 'Authorization' header

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.status(200).json({ message: 'Token is valid', user: decoded });
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}
