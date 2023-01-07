import { styled } from "stitches.config";

const Grid = styled("div", {
  display: "grid",
  minHeight: "100vh",
  paddingLeft: "var(--space)",
  paddingRight: "var(--space)",
  paddingTop: "var(--space-xs)",
  paddingBottom: "var(--space-s)",
  gridGap: "var(--space-s)",
  variants: {
    gridLayoutDefinition: {
      homeSmall: {
        gridTemplateAreas: `
             'nav nav nav nav'
             'name name name name'
             'bio bio bio bio'
             'musings musings musings musings'
             'spotify spotify spotify spotify'
             'footer footer footer footer'`,
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      homeLarge: {
        gridTemplateAreas: `
            'name name name . . nav nav nav'
            'bio bio bio . . . . .'
            'filter filter . . musings musings musings musings'
            'spotify spotify spotify spotify spotify spotify spotify spotify'
            'footer footer footer footer footer footer footer footer'`,
        gridTemplateColumns: "repeat(8, 1fr)",
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
