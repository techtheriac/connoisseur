import React from "react";
import { styled, css } from "stitches.config";
import Text from "./Text";
import Rounded from "./Rounded";
import { useTagsContext } from "./TagsProvider";
import { tags } from "BlogInfrastructure";
import Animations from "@/helpers/Events";

export default function Filter() {
  const [tagName, handlers] = useTagsContext();

  return (
    <_Filter>
      <Rounded />
      {tags.map((tag, index) => {
        return (
          <Text
            css={{
              textTransform: "capitalize",
            }}
            key={index}
            family="sans"
            type="filter"
            //onClick={handlers[tag]}

            onClick={handlers.fadeLayout}
          >
            {tag}
          </Text>
        );
      })}
    </_Filter>
  );
}

const _Filter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
});
