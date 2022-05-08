import { styled, css } from "stitches.config";
import Text from "./Text";
import Subscribe from "./Subscribe";

const _Footer = styled("div", {
  "> * + *": {
    marginTop: "var(--space-s)",
  },
  variants: {
    gridColumn: {
      gridColumnBase: {
        gridColumn: "6 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },
  },
});

export default function Footer() {
  return (
    <_Footer
      gridColumn={{
        "@initial": "gridColumnSm",
        "@sm": "gridColumnBase",
      }}
    >
      <Text
        family="serif"
        css={{
          fontSize: "var(--idealListingFontSize)",
        }}
      >
        Favouring the relationship between things over their intrinsic
        properties.
      </Text>
      <Subscribe />
    </_Footer>
  );
}
