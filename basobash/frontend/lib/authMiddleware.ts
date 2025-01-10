import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

// Add custom interface to extend NextApiRequest
interface ExtendedNextApiRequest extends NextApiRequest {
  user?: any;
}

// Update the type in the function signature
export const authenticateToken = (
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }

  jwt.verify(
    token,
    process.env.SECRET_KEY || "439E72DA84",
    (err: any, user: any) => {
      if (err) {
        return res.status(403).json({ error: "Invalid or expired token" });
      }

      req.user = user; // Add the user to the request object
      next(); // Proceed to the next middleware or API handler
    }
  );
};
