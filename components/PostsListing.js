//import MDX from "@mdx-js/runtime";
//import { postsPerPage } from "blog.config";
import Link from "next/link";

const PostsLising = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={"/musings/" + post.slug}>
            <a>{post.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default PostsLising;
