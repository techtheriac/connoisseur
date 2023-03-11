import { styled } from "stitches.config";

const Text = styled("p", {
  color: "white",
  variants: {
    family: {
      sans: {
        fontFamily: "$sansSerif",
      },
      serif: {
        fontFamily: "$serif",
      },
      bit: {
        fontFamily: "$bit",
      },
      pixel: {
        fontFamily: "$pixel",
      },
    },
    weight: {
      light: {
        fontWeight: "$light",
      },
      normal: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
      black: {
        fontWeight: "$black",
      },
    },
    type: {
      link: {
        textDecoration: "none",
        "&:hover": {
          color: "$tomato200",
          cursor: "pointer",
        },
      },
      filter: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  },
});

export default Text;
