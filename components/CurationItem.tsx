import { styled } from "stitches.config";

const CurationItem = styled("a", {
  color: "white",
  fontFamily: "$sansSerif",
  fontSize: "var(--idealArticleParagraphSize)",
  lineHeight: 1.5,
  textDecoration: "none",
  transitionProperty: "color",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in",

  "&:hover": {
    cursor: "pointer",
  },

  "&:not(:last-child):after": {
    content: `/`,
    marginLeft: "10px",
    marginRight: "10px",
    fontFamily: "$pixel",
  },

  variants: {
    status: {
      active: {
        color: "white",
        "&:hover": {
          color: "white",
        },
      },
      inactive: {
        color: "white",
        "&:hover": {
          color: "white",
        },
      },
    },
  },
});

export default CurationItem;
