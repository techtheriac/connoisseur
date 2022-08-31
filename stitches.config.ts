import { createStitches } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      serifDisplayRegular: "Financier Display Regular",
      serifDisplayLight: "Financier Display Light",
      serifText: "Magnet",
      sansText: "National Regular",
      magnet: "Magnet",
      magnetHeadline: "Magnet Headline",
    },
    space: {},
    sizes: {},
    fontSizes: {
      1: "12px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "30px",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      meduim: 500,
      bold: 700,
      black: 900,
    },
    lineHeights: {},
    letterSpacings: {},
    radii: {
      base: "6px",
    },
    zIndices: {},
    colors: {
      tomato100: "hsla(10,68%,46%, 100%)",
      tomato200: "hsla(10,69%,75%, 100%)",
      tomato300: "hsla(10,52%,56%, 100%)",
      tomato400: "hsla(10,69%,75%, 72%)",
      saffron100: "hsla(35, 100%, 71%, 100%)",
      garden100: "hsla(116,19%,29%, 1)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});

export type Polymorphic = string | React.ComponentType<any>;
