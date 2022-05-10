import { getHomePageListing } from "BlogInfrastructure";
import TitlesHome from "@/components/TitlesHome";
import Layout from "@/components/Layout";
export default function Home({ posts }) {
  return <TitlesHome posts={posts} />;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const posts = await getHomePageListing();
  return {
    props: {
      posts,
    },
  };
}
