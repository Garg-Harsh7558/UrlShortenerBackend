import { Link } from "../model/linkSchema.js";

const findLink = async (req, res) => {
  try {
    const { alias } = req.params;
    const link = await Link.findOne({ alias });      
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    return res.status(201).json({original:link.original});
  } catch (error) {
    console.log("Error finding link", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default findLink;