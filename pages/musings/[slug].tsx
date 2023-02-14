import React, { useEffect, useState } from "react";
import Text from "@/components/Text";
import Article from "@/components/Article";
import { styled, css } from "stitches.config";
import Main from "@/components/Main";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import Grid from "@/components/Grid"

import {
  getPost,
  getPostContent,
  getPosts,
  getMusingsSlugs,
} from "infrastructure/BlogInfrastructure";

import { ContentRenderer } from "@/components/ContentRenderer";

const Date = styled(Text, {
  color: "#000",
  alignSelf: "flex-start",
  fontSize: "var(--idealSansFontSize)",
  marginBottom: "var(--space-s)",
  fontFamily: "$serifDisplayRegular",
  gridColumn: "2",
  length: 0,
});

const Title = styled(Text, {
  color: "#000000b5",
  alignSelf: "flex-start",
  fontSize: "var(--idealHeadingOne)",
  marginBottom: "var(--space-s)",
  fontFamily: "$magnetHeadline",
  gridColumn: "2",
  length: 0,
});

const ArticleMain = styled(Main, {
  display: "grid",
  gridTemplateColumns:
    "minmax(var(--space-s), 1fr) minmax(auto, 75ch) minmax(var(--space-s), 1fr)",
  gridAutoRows: "max-content",

  "*": {
    fontFamily: "$serifText",
    color: "#202020c7",
  },

  p: {
    fontSize: "var(--idealArticleParagraphSize)",
    lineHeight: "1.1",
    hyphens: "auto",
    hyphenateLimitChars: "10 3 4",
    fontWeight: 350,
  },

  "p, h1, h2, h3, h4, h5, h6": {
    gridColumn: "2",
  },

  "p + h2": {
    fontSize: "var(--idealHeadingTwo)",
    fontFamily: "$sansText",
    margin: "var(--space-m) 0 var(--space-s) 0",
  },

  "p + h3": {
    fontSize: "var(--idealHeadingThree)",
    fontFamily: "$sansText",
    margin: "var(--space-s) 0 var(--space-s) 0",
  },

  "p + h4": {
    fontSize: "var(--idealSansFontSize)",
    fontFamily: "$sansText",
    margin: "var(--space-s) 0 var(--space-s) 0",
  },

  blockquote: {
    marginTop: "var(--space-m)",
    marginBottom: "var(--space-m)",
    gridColumn: "2",
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "blockquote > p": {
    color: "#2020205e",
    fontStyle: "italic",
    maxWidth: "45ch",
  },

  "> p + p": {
    marginTop: "var(--space-s)",
  },
  length: 0,
});

const Musing = ({ postId, postData, hearts, postContent, date }) => {
  useEffect(() => {
    console.log(postContent);
  });

  return (
    <>
      <Grid
        id="main"
        as="article"
        gridLayoutDefinition={{
          "@initial": "articleSmall",
          "@sm": "articleLarge",
        }}
      >
        <Date>{date}</Date>
        <Title as="h1">{postData.properties.Name.title[0].plain_text}</Title>
        <ContentRenderer postContent={postContent} />
      </Grid>
    </>
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
      date: `${format(parseISO(postData.created_time), "MMMMMM dd, yyyy")}`,
      hearts: postData.properties.hearts.number,
    },
    revalidate: 60,
  };
}

export default Musing;
