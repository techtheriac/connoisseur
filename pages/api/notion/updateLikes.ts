import { updateLikes } from "infrastructure/BlogInfrastructure";

export default async (req, res) => {
  let likesPageId: string | undefined = process.env.NOTION_LIKES_PAGE_ID;
  if (typeof likesPageId === "string")
    res.status(200).json(await updateLikes(likesPageId));
};
