// Add a Grid variant called layout to represent a persistent layout structure.
// or create a new Layout component for that purpose and parameterize grid to serve per page requirement

import { styled } from "stitches.config";

const Grid = styled("div", {
  display: "grid",
  minHeight: "100vh",
  paddingLeft: "var(--space)",
  paddingRight: "var(--space)",
  paddingTop: "var(--space-m)",
  paddingBottom: "var(--space-s)",
  gridGap: "var(--space-s)",
  variants: {
    gridLayoutDefinition: {
      homeSmall: {
        gridTemplateAreas: `
             'nav nav nav nav'
             'glitch glitch glitch glitch'
             'bio bio bio bio'
             'musings musings musings musings'
             'spotify spotify spotify spotify'
             'footer footer footer footer'`,
        gridTemplateColumns: "repeat(4, 1fr)",
        "> * + *": {
          marginBlockStart: "var(--space-m)",
        },
      },
      homeLarge: {
        gridTemplateAreas: `
            'nav nav nav nav nav nav nav nav'            
            'glitch glitch glitch glitch glitch glitch glitch glitch'
            'bio bio bio bio bio bio bio bio'
            'musings musings musings musings musings musings musings musings'
            'spotify spotify spotify spotify spotify spotify spotify spotify'
            'footer footer footer footer footer footer footer footer'`,
        gridTemplateColumns: "repeat(8, 1fr)",
        rowGap: "var(--space-m)",
        "> * + *": {
          marginBlockStart: "initial",
        },
      },
      articleSmall: {
        gridTemplateAreas: "$articleGridAreasSmall",
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      articleLarge: {
        gridTemplateAreas: "$articleGridAreasSmall",
        gridTemplateColumns: "repeat(8, 1fr)",
      },
    },
    background: {
      dark: {
        backgroundColor: "$black100",
      },
      transparent: {
        backgroundColor: "transparent",
      },
      paper: {
        // backgroundImage: "url(/images/paper.png)",
        backgroundImage: "url(/images/bg-grain-dark.png)",
        backgroundColor: "$black100",
        // backgroundSize: "100px 100px",
        backgroundRepeat: "repeat",
        // backgroundAttachment: "fixed",
      },
    },
  },
});

export default Grid;
