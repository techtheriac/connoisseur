import { styled, css } from "stitches.config";
import CurationItem from "./CurationItem";
import React from "react";
import Text from "./Text";
import HorizontalLine from "./HorizontalLine";

const parseUrl = (tags, slug) => {
  return tags.includes("poetry") ? `/poetry/${slug}` : `/musings/${slug}`;
};

export const StyledCurationGroup = styled("div", {
  gridArea: "musings",
  display: "grid",
  gridGap: "var(--space-s)",
  variants: {
    gridLayoutDefinition: {
      collapsed: {
        gridTemplateColumns: "2fr 2fr 1fr",
        "> * + *": {
          marginBlockStart: "initial",
        },
      },
      flow: {
        gridTemplateColumns: "1fr",
        "> * + *": {
          marginBlockStart: "var(--space-s)",
        },
      },
    },
  },
});

export const StyledCurationTitle = styled(Text, {
  fontSize: "var(--idealHeadingTwo)",
  textTransform: "capitalize",
});

export const StyledCuration = styled("div", {
  display: "flex",
  flexDirection: "column",
  "> * + *": {
    marginTop: "var(--space-xs)",
  },
});

export function Curation({ posts, filter }) {
  console.log(posts.map((x) => x.title));
  return (
    <StyledCuration>
      <StyledCurationTitle as="h3" family="serif">
        {filter === "musings"
          ? "musings & notes"
          : filter === "poetry"
          ? "selected poems"
          : "on engineering"}
      </StyledCurationTitle>
      <HorizontalLine />
      <div>
        {posts.map((post, index) => {
          return (
            <CurationItem
              key={index}
              status={
                post.title.split("a").length % 2 == 0 ? "active" : "inactive"
              }
            >
              {post.title}
            </CurationItem>
          );
        })}
      </div>
    </StyledCuration>
  );
}
