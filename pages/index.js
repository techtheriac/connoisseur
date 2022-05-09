import { getHomePageListing } from "BlogInfrastructure";
import TitlesHome from "@/components/TitlesHome";

export default function Home({ posts }) {
  return <TitlesHome posts={posts} />;
}

export async function getStaticProps() {
  const posts = await getHomePageListing();
  return {
    props: {
      posts,
    },
  };
}
