// lib/authMiddleware.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = '439E72DA84';

export const authenticateToken = (req: any, res: any, next: any) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'Access Denied' });
    }

    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;  // Add the user to the request object
        next();  // Proceed to the next middleware or API handler
    });
};
