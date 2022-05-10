import { styled, css } from "stitches.config";

const TitleHomeItem = styled("a", {
  color: "white",
  fontFamily: "$serifDisplayRegular",
  fontSize: "var(--idealListingFontSize)",
  lineHeight: 1.5,
  textDecoration: "none",

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