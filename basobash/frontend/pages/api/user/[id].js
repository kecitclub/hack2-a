import dbConnect from "../../../lib/mongodb"; // Adjust the path if necessary
import User from "../../../models/User"; // Adjust the path if necessary

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
