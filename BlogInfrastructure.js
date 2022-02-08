const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN
})

export const getPosts = async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_BLOG_ID
  })
}