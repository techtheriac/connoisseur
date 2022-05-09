import { styled, css } from "stitches.config";
import TitleHomeItem from "./TitleHomeItem";

const parseUrl = (tags, slug) => {
  return tags.includes("poetry") ? `/poetry/${slug}` : `/musings/${slug}`;
};

export default function TitlesHome({ posts }) {
  return (
    <_TitlesHome>
      {posts.map((post, index) => {
        return (
          <TitleHomeItem
            status={index % 2 == 0 ? "inactive" : "active"}
            href={parseUrl(post.tags, post.slug)}
            key={index}
          >
            {post.title}
          </TitleHomeItem>
        );
      })}
    </_TitlesHome>
  );
}
const _TitlesHome = styled("div", {});
