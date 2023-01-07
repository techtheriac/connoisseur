import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { updateSpotifyTokenNotion, getNewToken } from "infrastructure/Spotify";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// To be periodically called by cron job
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  // Call Spotify
  const token = await getNewToken();

  console.log(token);
  // update notion
  await updateSpotifyTokenNotion(process.env.NOTION_TOKEN_PAGE_ID, token?.data);
  res.status(200);
}
