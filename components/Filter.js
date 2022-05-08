import { styled, css } from "stitches.config";
import Text from "./Text";

export default function Filter() {
  return (
    <_Filter>
      <Text family="sans" type="filter">
        Musings
      </Text>
      <Text family="sans" type="filter">
        On Engineering
      </Text>
      <Text family="sans" type="filter">
        Capsules
      </Text>
      <Text family="sans" type="filter">
        Journal
      </Text>
    </_Filter>
  );
}

const _Filter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
});
