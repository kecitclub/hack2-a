import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// Mock user for demonstration purposes (you would typically get this from your database)
const user = {
    password: "$2a$10$FMyY5GOsPldkvPzRMPzG1OU1d52Pq9dQJxWcmkPO1hJhVqsUqRY4y" // hashed password
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { password } = req.body.credentials;

        // Ensure password exists
        if (!password) {
            return res.status(400).json({ error: "Password is required" });
        }

        // Check if the user object and its password exist
        if (!user?.password) {
            return res.status(500).json({ error: "User password not found" });
        }

        try {
            // Compare the passwords
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                return res.status(200).json({ message: "Password is correct!" });
            } else {
                return res.status(401).json({ error: "Incorrect password" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    } else {
        // Handle method not allowed
        return res.status(405).json({ error: "Method not allowed" });
    }
}
