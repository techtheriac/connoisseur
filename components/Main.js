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
  },
});

export default Main;
