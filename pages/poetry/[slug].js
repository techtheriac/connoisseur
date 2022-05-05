import dynamic from "next/dynamic";
import {
  getPoems,
  getPostContent,
  getPost,
  getPoetrySlugs,
} from "BlogInfrastructure";
import { useEffect } from "react";
import { ContentRenderer } from "@/components/ContentRenderer";

const Poem = ({ postId, postData, postContent }) => {
  useEffect(() => {
    console.log("postContent", postContent);
  });

  return <ContentRenderer postContent={postContent} />;
};

export async function getStaticPaths() {
  const { paths, fallback } = await getPoetrySlugs();

  return {
    paths,
    fallback,
  };
}

export async function getStaticProps(context) {
  const slug = context.params && context.params.slug;

  // get all posts from notion database
  const posts = await getPoems();

  // find post with a matching slug property
  const matchedPost = posts.results.filter((post) => {
    if (post && post.properties && post.properties.slug) {
      return post.properties.slug.rich_text?.[0].plain_text == slug;
    }
  })[0];

  // get notion page data and all child block data
  const [postData, postContent] = await Promise.all([
    getPost(matchedPost.id),
    getPostContent(matchedPost.id),
  ]);

  return {
    props: {
      postId: matchedPost.id,
      postData,
      postContent,
    },
    revalidate: 60,
  };
}

export default Poem;
