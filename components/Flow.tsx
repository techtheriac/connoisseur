import { styled } from "stitches.config";

export const Flow = styled("div", {
  display: "flex",
  flexDirection: "column",
  "* + *": {
    marginTop: "var(--space-m)",
  },
  length: 0,
});
