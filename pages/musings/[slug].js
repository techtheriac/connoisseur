import dynamic from "next/dynamic";
import styles from "../../styles/Musings.module.scss";
import { compact } from "lodash";
import { getPost, getPostContent, getPosts, getPostSlugs } from "BlogInfrastructure";
import { useEffect } from "react";


const BlogLayout = dynamic(
  () => import("../../components/wrappers/BlogLayout"),
  { ssr: false }
);

const Musing = ({ postId, postData, postContent }) => {

  useEffect(() => {
    console.log("postContent", postContent)
  })

  return (
    <BlogLayout>
      <div>
      {
        postContent.map((paragraph, index) => {
          // return <p key={paragraph.id}>
          //   {paragraph.paragraph.text[0].plain_text}
          // </p>;

          if(paragraph.type === "paragraph") {
            return <p key={index}>{ paragraph.paragraph.text[0].plain_text }</p>
          }

          if(paragraph.type === "heading_2") {
            return <h2 key={index}>{paragraph.heading_2.text[0].plain_text}</h2>
          }

          if(paragraph.type === "heading_1") {
            return <h1 key={index}>{paragraph.heading_1.text[0].plain_text}</h1>
          }

        })
      }
      </div>
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const {paths, fallback} = await getPostSlugs();
  
  return {
    paths,
    fallback
  }
}

export async function getStaticProps(context) {
  const slug = context.params && context.params.slug;

  // get all posts from notion database
  const posts = await getPosts();

  // find post with a matching slug property
  const matchedPost = posts.results.filter((post) => {
    if(post && post.properties && post.properties.slug) {
      return post.properties.slug.rich_text?.[0].plain_text == slug
    }
  })[0]

  // get notion page data and all child block data
  const [postData, postContent] = await Promise.all([
    getPost(matchedPost.id),
    getPostContent(matchedPost.id)
  ])

  return {
    props: {
      postId: matchedPost.id,
      postData,
      postContent
    },
    revalidate: 60,
  }
}

export default Musing;
