import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import {
  getNowPlaying,
  getSpotifyTokenFromNotion,
} from "infrastructure/Spotify";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  const token = await getSpotifyTokenFromNotion();
  res.status(200).json(await getNowPlaying(token));
}
