import { styled, css } from "stitches.config";

const TitleHomeItem = styled("span", {
  color: "white",
  fontFamily: "$serif",
  fontSize: "var(--idealListingFontSize)",
  lineHeight: 1.5,
  textDecoration: "none",
  transitionProperty: "color",
  transitionDuration: "0.3s",
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

export default TitleHomeItem;
