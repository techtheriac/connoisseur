import { styled, css } from "stitches.config";

const Text = styled("p", {
  fontSize: "var(--idealSansFontSize)",
  color: "white",
  variants: {
    family: {
      sans: {
        fontFamily: "$sansText",
      },
      serif: {
        fontFamily: "$serifText",
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
