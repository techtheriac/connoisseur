import { styled, css } from "stitches.config";

const Rounded = styled("div", {
  backgroundColor: "#BC703B",
  width: "var(--idealListingFontSize)",
  height: "var(--idealListingFontSize)",
  borderRadius: "50%",
  length: 0,
  variants: {
    color: {
      pulse: {
        backgroundColor: "red",
      },
    },
  },
});

export default Rounded;
