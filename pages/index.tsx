import React from "react";
import Grid from "@/components/Grid";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";
import { Curation, StyledCurationGroup } from "@/components/Curation";
import Now from "@/components/Now";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";

import { getHomepageListing } from "infrastructure/BlogInfrastructure";
import Glitch from "@/components/Glitch";
import Scroll from "@/helpers/Scroll";

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
      <Curation title="poems" posts={posts.poetry} />
    </StyledCurationGroup>
  );
}

Home.getLayout = function getLayout(page) {
  useIsomorphicLayoutEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container="true"]'
    );

    new Scroll({ container: scrollContainer });
  }, []);
  return (
    <Grid
      gridLayoutDefinition={{
        "@initial": "homeSmall",
        "@sm": "homeLarge",
        "@lg": "homeLarge",
      }}
      background="dark"
      data-scroll-container
    >
      <Navigation />
      <Glitch />
      <Bio />
      {page}
      <Now />
      {/* <Footer /> */}
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
