import Link from "next/link";
import styles from "../styles/components/PostListing.module.scss";

const PostsLising = ({ posts }) => {
  return (
    <div className={styles.containerPosts}>
      {posts.map((post) => {
        return (
          <div className={styles.containerLink} key={post.slug}>
            <Link href={"/musings/" + post.slug}>
              <a className={styles.musingLink}>{post.title}</a>
            </Link>

            <small className={styles.musingDate}>{post.date}</small>
          </div>
        );
      })}
    </div>
  );
};

export default PostsLising;
