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
        gridColumn: "1 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },
  },
  length: 0,
});

export default Main;
