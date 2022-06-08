import { styled } from "stitches.config";

const Grid = styled("div", {
  display: "grid",
  minHeight: "100vh",
  paddingLeft: "var(--space)",
  paddingRight: "var(--space)",
  paddingTop: "var(--space-m)",
  paddingBottom: "var(--space-s)",

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
        gridTemplateColumns: "1fr",
      },
      gardenGrid: {
        gridGap: "1rem",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(min(100%, var(15ch)), 1fr));",
      },
    },

    background: {
      tomato: {
        backgroundColor: "$tomato100",
      },
      transparent: {
        backgroundColor: "transparent",
      },
      paper: {
        backgroundImage: "url(/images/paper.png)",
      },
    },
  },
});

export default Grid;
