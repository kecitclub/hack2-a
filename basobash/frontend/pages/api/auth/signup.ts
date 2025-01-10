import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

<<<<<<< HEAD
  const { phone, password, description, sex } = req.body;
=======
    const { phone, password, description, sex, name } = req.body;
>>>>>>> 15bac43cd4f34f97fb626d04d3819c1ff611e7dd

  try {
    await dbConnect();

    const existingUser = await User.findOne({ phone });
    console.log(existingUser);

    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

<<<<<<< HEAD
    const hashedPassword = await bcrypt.hash(password, 10);
=======
        const user = await User.create({phone: phone, password: hashedPassword, description: description, sex: sex, name: name})
>>>>>>> 15bac43cd4f34f97fb626d04d3819c1ff611e7dd

    const user = await User.create({
      phone: phone,
      password: hashedPassword,
      description: description,
      sex: sex,
    });

    res.status(201).json({ message: "User created successfully", user: user });
  } catch (error) {
    console.error("Error during signup:", error); // Log the error
    res.status(500).json({ error: "Internal Server Error" });
  }
}
