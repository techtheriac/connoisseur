import React from "react";
import Grid from "@/components/Grid";
import Navigation from "@/components/Navigation";
import Namaste from "@/components/Namaste";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";
import TitlesHome from "@/components/TitlesHome";
import Spotify from "@/components/Spotify";
import Filter from "@/components/Filter";

import {
  getHomePageListing,
  getAllAvailablePostTags,
} from "infrastructure/BlogInfrastructure";

import {
  getSpotifyTokenFromNotion,
  // updateSpotifyTokenNotion,
} from "infrastructure/Spotify";

export default function Home({ posts, tags }) {
  return (
    <>
      <TitlesHome posts={posts} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Grid
      gridLayoutDefinition={{
        "@initial": "homeSmall",
        "@sm": "homeLarge",
        "@lg": "homeLarge",
      }}
    >
      <Navigation />
      <Namaste />
      <Bio />
      <Filter />
      <Spotify />
      {page}
      <Footer />
    </Grid>
  );
};

export async function getStaticProps() {
  const posts = await getHomePageListing();
  const tags = await getAllAvailablePostTags();
  const token = await getSpotifyTokenFromNotion();

  console.log("token res", token);
  return {
    props: {
      posts,
      tags,
    },
    revalidate: 60,
  };
}
