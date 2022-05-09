import { styled } from "stitches.config";
import Text from "./Text";

export default function Filter() {
  return (
    <_Filter>
      <Rounded />
      <Text family="sans" type="filter">
        Musings
      </Text>
      <Text family="sans" type="filter">
        Engineering
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

const Rounded = styled("div", {
  backgroundColor: "$saffron100",
  width: "var(--idealSansFontSize)",
  height: "var(--idealSansFontSize)",
  borderRadius: "50%",
});
