import { styled } from "stitches.config";

const Main = styled("main", {
  variants: {
    gridColumn: {
      gridColumnBase: {
        gridColumn: "6 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },

    articleColumn: {
      gridColumnBase: {
        display: "grid",
        gridTemplateColumns:
          "minmax(var(--space-s), 1fr) minmax(auto, 65ch), minmax(var(--space-s), 1fr)",
        gridColumn: "1 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },
  },
});

export default Main;
