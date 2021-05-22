import BlogLayout from "@/components/wrappers/BlogLayout";
import PostsLising from "@/components/PostsListing";
import { getAllPosts } from "api";
import config from "../../blog.config";
import styles from "../../styles/BlogListing.module.scss";

const PostsPage = ({ posts }) => {
  return (
    <BlogLayout>
      <PostsLising posts={posts} />
    </BlogLayout>
  );
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
