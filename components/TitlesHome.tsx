import { styled, css } from "stitches.config";
import TitleHomeItem from "./TitleHomeItem";
import React from "react";
import { useTagsContext } from "./TagsProvider";
import Text from "./Text";

const parseUrl = (tags, slug) => {
  return tags.includes("poetry") ? `/poetry/${slug}` : `/musings/${slug}`;
};

const ListHeading = styled(Text, {
  fontSize: "var(--idealHeadingTwo)",
  borderBottom: "1px solid #EBA293",
  paddingBottom: "var(--space-xs)",
});

const StyledTitlesHome = styled("div", {
  gridArea: "musings",
});

const handleVisibilityToggle = (itemTags, selectedTag) => {
  return itemTags.includes(selectedTag) ? "active" : "inactive";
};

export default function TitlesHome({ posts }) {
  const [selectedTag, handlers] = useTagsContext();
  return (
    <StyledTitlesHome>
      <ListHeading as="h2" family="serif">
        Severly Untended Curations
      </ListHeading>
      {posts.map((post, index) => {
        return (
          <TitleHomeItem
            status={handleVisibilityToggle(post.tags, selectedTag)}
            key={index}
          >
            {post.title}
          </TitleHomeItem>
        );
      })}
    </StyledTitlesHome>
  );
}
