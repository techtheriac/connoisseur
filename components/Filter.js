import React from "react";
import { styled, css } from "stitches.config";
import Text from "./Text";
import Rounded from "./Rounded";
import useSWR from "swr";
import fetcher from "@/helpers/fetcher";
import { useTagsContext } from "./TagsProvider";

export default function Filter({ tags }) {
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
            onClick={handlers[tag]}
          >
            {tag}
          </Text>
        );
      })}
    </_Filter>
  );
}

const _Filter = styled("div", {
  position: "absolute",
  top: "var(--space-m)",
  right: "var(--space)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
});
