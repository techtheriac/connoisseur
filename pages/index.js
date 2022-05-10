import React, { useEffect } from "react";
import {
  getHomePageListing,
  getAllAvailablePostTags,
} from "BlogInfrastructure";
import TitlesHome from "@/components/TitlesHome";
import Layout from "@/components/Layout";
import Filter from "@/components/Filter";

export default function Home({ posts, tags }) {
  return (
    <>
      <Filter tags={tags} />
      <TitlesHome posts={posts} />;
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const posts = await getHomePageListing();
  const tags = await getAllAvailablePostTags();
  return {
    props: {
      posts,
      tags,
    },
    revalidate: 60,
  };
}
