import { updateLikes } from "BlogInfrastructure";

export default async (req, res) => {
  console.log(req.url);
  const tags = await updateLikes("7e3a067b-06dc-4b6c-97a1-8a0a8ac06471");
  res.status(200).json(tags);
};
