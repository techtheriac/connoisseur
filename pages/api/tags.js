import { getAllAvailablePostTags } from "BlogInfrastructure";

export default async (req, res) => {
  const tags = await getAllAvailablePostTags();
  res.status(200).json(tags);
};
