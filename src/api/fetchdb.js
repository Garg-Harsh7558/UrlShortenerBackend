import { nanoid } from "nanoid";
import { Link } from "../model/linkSchema.js";

const fetchdb = async (req, res) => {
  try {
    const { original, alias } = req.body;
    if (alias) {
      const existalias = await Link.findOne({ alias });
      if (existalias) {
        return res.status(400).json({ message: "Alias already exists" });
      }
      const newShortLink = await Link.create({ original, alias });
      return res.status(200).json({ newShortLink });
    } else {
      const present = await Link.findOne({ original });
      if (present) {
        return res.status(200).json({ newShortLink: present });
      }
      const newalias = nanoid(8);
      const newShortLink = await Link.create({ original, alias: newalias });
      return res.status(200).json({ newShortLink });
    }
  } catch (error) {
    console.error("Error shortening link:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default fetchdb;