import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Property from "@/models/property";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const {
        title,
        description,
        price,
        location,
        hall,
        bedrooms,
        bathrooms,
        kitchen,
        images,
        owner,
      } = req.body;

      // Validation (if needed)
      if (!title || !price || !location || !bedrooms || !bathrooms || kitchen === undefined) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Save the property to the database
      const property = new Property({
        title,
        description,
        price,
        location,
        hall,
        bedrooms,
        bathrooms,
        kitchen,
        images,
        owner,
      });

      await property.save();

      res.status(201).json({ success: true, property });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
