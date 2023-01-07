import React from "react";
import { styled, css } from "stitches.config";
import Text from "./Text";
import { useTagsContext } from "./TagsProvider";
import { tags } from "infrastructure/BlogInfrastructure";

const StyledFilter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
  gridArea: "filter",
  variants: {
    visibilityToggle: {
      show: {
        display: "flex",
      },
      hide: {
        display: "none",
      },
    },
  },
});

export default function Filter() {
  // const [tagName, handlers] = useTagsContext();
  return (
    <StyledFilter
      visibilityToggle={{
        "@initial": "hide",
        "@sm": "show",
        "@lg": "show",
      }}
    >
      {tags.map((tag, index) => {
        return (
          <Text
            css={{
              textTransform: "uppercase",
            }}
            key={index}
            family="sans"
            type="filter"
          >
            {tag}
          </Text>
        );
      })}
    </StyledFilter>
  );
}
