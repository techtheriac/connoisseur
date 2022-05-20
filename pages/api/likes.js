import { updateLikes } from "BlogInfrastructure";

export default async (req, res) => {
  const tags = await updateLikes();
  res.status(200).json(tags);
};
