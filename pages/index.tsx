import React from "react";
import Grid from "@/components/Grid";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";
import { Curation, StyledCurationGroup } from "@/components/Curation";
import Spotify from "@/components/Spotify";

import { getHomepageListing } from "infrastructure/BlogInfrastructure";

export default function Home({ posts }) {
  return (
    <StyledCurationGroup
      gridLayoutDefinition={{
        "@initial": "flow",
        "@sm": "collapsed",
        "@lg": "collapsed",
      }}
    >
    <Curation title="musings & notes" posts={posts.musings} />
    <Curation title="on engineering" posts={posts.engineering} />
    <Curation title="selected poems" posts={posts.poetry} />
    </StyledCurationGroup>
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
      <Bio />
      <Spotify />
      {page}
      <Footer />
    </Grid>
  );
};

export async function getStaticProps() {
  const posts = await getHomepageListing();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
