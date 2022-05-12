import { styled } from "stitches.config";

const StyledArticle = styled("div", {
  margin: "0 auto",

  "*": {
    fontFamily: "$serifText",
    color: "#fff",
  },
  p: {
    maxWidth: "60ch",
    fontSize: "var(--idealArticleParagraphSize)",
    lineHeight: "1.1",
  },

  "p + p": {
    marginTop: "var(--space-s)",
  },

  "p + h1, h2, h3, h4, h6": {
    marginTop: "var(--space-s)",
  },

  "h1, h2, h3, h4, h5": {
    fontFamily: "$serifDisplayRegular",
    fontSize: "var(--idealArticleParagraphSize)",
    marginBottom: "var(--space-s)",
  },
});

export default StyledArticle;
