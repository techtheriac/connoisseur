import Link from "next/link";
import styles from "../styles/components/PostListing.module.scss";

const PostsLising = ({ posts }) => {
  return (
    <div className={styles.containerPosts}>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={"/musings/" + post.slug}>
            <a>{post.title + " " + post.date}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default PostsLising;
