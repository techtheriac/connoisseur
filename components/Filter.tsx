import React from "react";
import { styled, css } from "stitches.config";
import Text from "./Text";
import { useTagsContext } from "./TagsProvider";
import { tags } from "BlogInfrastructure";

export default function Filter() {
  const [tagName, handlers] = useTagsContext();

  return (
    <StyledFilter>
      {tags.map((tag, index) => {
        return (
          <Text
            css={{
              textTransform: "capitalize",
            }}
            key={index}
            family="sans"
            type="filter"
            onClick={handlers[tag]}
          >
            {tag}
          </Text>
        );
      })}
    </StyledFilter>
  );
}

const StyledFilter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
  length: 0,
});
