const { Client } = require("@notionhq/client");
const _ = require("lodash");

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

export const getPosts = async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_BLOG_ID,
    sorts: [
      {
        property: "published",
        direction: "descending",
      },
    ],
  });
};

export const getPost = async (id) => {
  return await notion.pages.retrieve({ page_id: id });
};

export const getPostContent = async (id) => {
  const baseQuery = {
    block_id: id,
    page_size: 100,
  };

  let results = [];
  let postContent = await notion.blocks.children.list(baseQuery);
  results = [...postContent.results];
  while (postContent.has_more) {
    postContent = await notion.blocks.children.list({
      ...baseQuery,
      start_cursor: postContent.next_cursor,
    });
    results = [...results, ...postContent.results];
  }
  return results;
};

export const getMusingsSlugs = async () => {
  const posts = await getPosts();
  const postSlugs = _.compact(
    posts.results.map((post) => {
      if (
        post.properties &&
        post.properties.slug &&
        post.properties.slug.rich_text
      ) {
        return `/musings/${post.properties.slug.rich_text[0].plain_text}`;
      }
    })
  );

  return {
    paths: postSlugs,
    fallback: "blocking",
  };
};

// -------- POEMS ---------------------------------
export const getPoems = async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_BLOG_ID,
    filter: {
      property: "Tags",
      multi_select: {
        contains: "poetry",
      },
    },
    sorts: [
      {
        property: "published",
        direction: "descending",
      },
    ],
  });
};

export const getPoetrySlugs = async () => {
  const posts = await getPoems();
  const postSlugs = _.compact(
    posts.results.map((post) => {
      if (
        post.properties &&
        post.properties.slug &&
        post.properties.slug.rich_text
      ) {
        return `/poetry/${post.properties.slug.rich_text[0].plain_text}`;
      }
    })
  );

  return {
    paths: postSlugs,
    fallback: "blocking",
  };
};

// _____________ USER INTERFACE ____________________

export const getHomePageListing = async () => {
  const res = await getPosts();
  return res.results.map((post) => {
    return {
      dateCreated: post.created_time,
      slug: post.properties.slug.rich_text[0].plain_text,
      title: post.properties.Name.title[0].plain_text,
      tags: post.properties.Tags.multi_select.map((tag) => {
        return tag.name;
      }),
    };
  });
};

export const getAllAvailablePostTags = async () => {
  const res = await getPosts();
  const tags = res.results.map((post) => {
    return [...post.properties.Tags.multi_select.map((tag) => tag.name)];
  });
  const flattenedArray = tags.flat();
  return flattenedArray.filter((x, i) => flattenedArray.indexOf(x) === i);
};
