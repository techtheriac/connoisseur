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
            'bio bio bio . . nav nav nav'            
            'musings musings musings musings musings musings musings musings'
            'spotify spotify spotify spotify spotify spotify spotify spotify'
            'footer footer footer footer footer footer footer footer'`,
        gridTemplateColumns: "repeat(8, 1fr)",
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
      tomato: {
        backgroundColor: "$tomato100",
      },
      transparent: {
        backgroundColor: "transparent",
      },
      paper: {
        backgroundImage: "url(/images/paper.png)",
      },
    },
  },
});

export default Grid;
