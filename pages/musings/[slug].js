import dynamic from "next/dynamic";
import styles from "../../styles/Musings.module.scss";
import { getAllPosts, getPostBySlug } from "api";
import config from "blog.config";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Code from "@/components/Code";
const components = { Code };

const BlogLayout = dynamic(
  () => import("../../components/wrappers/BlogLayout"),
  { ssr: false }
);

const Musing = ({ post, source }) => {
  return (
    <BlogLayout>
      <div className={styles.contentMusing}>
        <section className={styles.containerTitleMusing}>
          <h1 className={styles.titleMusing}>{post.title}</h1>
          <p>{config.author}</p>
        </section>
        <ul className={styles.socialMusing}>
          <li>Share</li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
        </ul>
        <main className={styles.paragraphsMusing}>
          {/* contents should be here */}
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </BlogLayout>
  );
};

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
  ]);

  const mdxSource = await serialize(post.content);

  return {
    props: { post, source: mdxSource },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
}

export default Musing;
