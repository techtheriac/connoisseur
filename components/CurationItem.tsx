import { styled, css } from "stitches.config";

const CurationItem = styled("span", {
  color: "white",
  fontFamily: "$serif",
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
  },

  variants: {
    status: {
      active: {
        color: "white",
        "&:hover": {
          color: "$tomato200",
        },
      },
      inactive: {
        color: "$tomato400",
        "&:hover": {
          color: "white",
        },
      },
    },
  },
});

export default CurationItem;
