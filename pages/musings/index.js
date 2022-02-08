import dynamic from "next/dynamic";
import PostsLising from "@/components/PostsListing";
import { getAllPosts } from "api";
import { getPosts } from "BlogInfrastructure";
import config from "../../blog.config";
import styles from "../../styles/BlogListing.module.scss";

const BlogLayout = dynamic(
  () => import("../../components/wrappers/BlogLayout"),
  { ssr: false }
);

const PostsPage = ({ posts }) => {
  return (
    <BlogLayout>
      <PostsLising posts={posts} />
    </BlogLayout>
  );
};

export async function getStaticProps() {

  console.log("Notion posts", await getPosts() )
  const posts = getAllPosts(["title", "date", "slug", "author"]);
  const startIndex = 0;
  const endIndex = config.postsPerPage;

  return {
    props: { posts: posts.slice(startIndex, endIndex) },
  };
}

export default PostsPage;
