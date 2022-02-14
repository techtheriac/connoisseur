import dynamic from "next/dynamic";
import PostsLising from "@/components/PostsListing";
import { getPosts } from "BlogInfrastructure";

const BlogLayout = dynamic(
  () => import("../../components/wrappers/BlogLayout"),
  { ssr: false }
);

const PostsPage = ({ posts }) => {
  return (
    <BlogLayout>
      {/* <PostsLising posts={posts} /> */}
    </BlogLayout>
  );
};

export async function getStaticProps() {

  const notionPosts = await getPosts()

  const results = notionPosts.results;

  results.forEach((elem) => {
    console.log(elem.properties)
  })
  
  return {
    props: {  },
  };
}

export default PostsPage;
