const { Client } = require("@notionhq/client");
import axios from "axios";

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

// Gets latest token
export const getSpotifyTokenFromNotion = async () => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_SPOTIFY_ID,
    filter: {
      property: "active",
      checkbox: {
        equals: true,
      },
    },
  });

  if (res) {
    return res?.results[0].properties.value.rich_text[0].text.content;
  }

  return "";
};

export const getNowPlaying = async (token: string) => {
  let songName = "";
  let isPlaying = false;
  let artistName = "";
  let url = "";
  let coverImageUrl = "";

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // fetch currently playing data.
  const res = await axios.get(
    `${process.env.SPOTIFY_BASE}/me/player/currently-playing`,
    {
      headers,
    }
  );

  // if there is no data, then the user is not playing anything, so we fetch the last played song instead.
  if (
    res.data.is_playing === false ||
    res.data.currently_playing_type !== "track"
  ) {
    const res = await axios.get(
      `${process.env.SPOTIFY_BASE}/me/player/recently-played?limit=1`,
      { headers }
    );

    const playHistory = res.data.items;
    const recentTrack = playHistory[0].track;

    songName = recentTrack.name;
    isPlaying = false;
    artistName = recentTrack.artists[0].name;
    url = recentTrack.external_urls.spotify;
    coverImageUrl = recentTrack.album.images[0].url;
  } else {
    const track = res.data.item;

    songName = track.name;
    isPlaying = res.data.is_playing;
    artistName = track.artists[0].name;
    url = track.external_urls.spotify;
    coverImageUrl = track.album.images[0].url;
  }

  return {
    artistName,
    isPlaying,
    songName,
    url,
    coverImageUrl,
  };
};

export const updateSpotifyTokenNotion = async (
  id: string | undefined,
  value: string
): Promise<Boolean> => {
  const updateResponse = await notion.pages.update({
    page_id: id,
    properties: {
      value: {
        text: "",
      },
    },
  });
  if (updateResponse) {
    return true;
  }

  return false;
};

export const getNewToken = async () => {
  // application/x-www-form-urlencoded parameters

  console.log(process.env.SPOTIFY_REFRESH_TOKEN);

  if (typeof process.env.SPOTIFY_REFRESH_TOKEN === "string") {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN);

    const encodedSecret = Buffer.from(
      process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
    ).toString("base64");

    console.log(encodedSecret);

    const headers = {
      Authorization: `Basic ${encodedSecret}`,
    };

    // fetch token with POST request
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      { headers }
    );

    console.log(res);

    return res;
  }
};
