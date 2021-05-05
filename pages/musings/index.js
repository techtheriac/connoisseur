import PostsLising from "@/components/PostsListing";
import { getAllPosts } from "api";
import config from "../../blog.config";

const PostsPage = ({ posts }) => {
  return <PostsLising posts={posts} />;
};

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "author"]);
  const startIndex = 0;
  const endIndex = config.postsPerPage;

  return {
    props: { posts: posts.slice(startIndex, endIndex) },
  };
}

export default PostsPage;
