import React, { useEffect } from "react";
import Text from "@/components/Text";
import dynamic from "next/dynamic";
import Article from "@/components/Article";
import { styled, css } from "stitches.config";

import {
  getPost,
  getPostContent,
  getPosts,
  getMusingsSlugs,
} from "BlogInfrastructure";

import { ContentRenderer } from "@/components/ContentRenderer";

const Musing = ({ postId, postData, postContent }) => {
  return (
    <div>
      <Text
        css={{
          color: "#000",
        }}
        as="h1"
      >
        {postData.properties.Name.title[0].plain_text}
      </Text>
      <ContentRenderer postContent={postContent} />
    </div>
  );
};

Musing.getLayout = function getLayout(page) {
  return <Article>{page}</Article>;
};

export async function getStaticPaths() {
  const { paths, fallback } = await getMusingsSlugs();

  return {
    paths,
    fallback,
  };
}

export async function getStaticProps(context) {
  const slug = context.params && context.params.slug;

  // get all posts from notion database
  const posts = await getPosts();

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

export default Musing;
