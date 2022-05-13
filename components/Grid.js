import { styled } from "stitches.config";

const Grid = styled("div", {
  display: "grid",
  minHeight: "100vh",
  paddingLeft: "var(--space)",
  paddingRight: "var(--space)",
  paddingTop: "var(--space-m)",
  paddingBottom: "var(--space)",

  variants: {
    grid: {
      gridBase: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: "var(--space-s)",
      },
      gridSm: {
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "var(--space-s)",
      },
      articleGrid: {
        justifyContent: "center",
      },
    },

    background: {
      tomato: {
        backgroundColor: "$tomato100",
      },
      transparent: {
        backgroundColor: "transparent",
      },
    },
  },
});

export default Grid;
