// pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from "next";
import { authenticateToken } from "../../lib/authMiddleware";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  authenticateToken(req, res, () => {
    res.status(200).json({ message: "Protected content accessed!" });
  });
}
