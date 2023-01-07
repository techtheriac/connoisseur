import { styled, css } from "stitches.config";
import Text from "./Text";
import Subscribe from "./Subscribe";

const links = [
  {
    name: "Twitter",
    link: "https://twitter.com/techtheriac",
  },
  {
    name: "Github",
    link: "https://github.com/techtheriac",
  },
  {
    name: "VSCO",
    link: "https://vsco.co/jaefaux",
  },
];

const Salutation = styled(Text, {
  fontSize: "var(--idealHeadingTwo)",
  textTransform: "capitalize",
});

const FooterCopy = styled(Text, {
  maxWidth: "35ch",
  fontSize: "var(--idealArticleParagraphSize)",
  lineHeight: 1.2,
});

const FlexBase = styled("div", {
  display: "flex",
});

const FlexColumns = styled(FlexBase, {
  flexDirection: "column",
});

const FlexRows = styled(FlexBase, {
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledFooter = styled("div", {
  gridArea: "footer",
  display: "inherit",
  gridTemplateColumns: "inherit",
  gridColumnGap: "inherit",

  variants: {
    gridLayoutDefinition: {
      footerSmall: {
        gridTemplateAreas: `
        'salute salute salute salute'
        'subscribe subscribe subscribe subscribe'
        'links links links links'
        `,
        gridTemplateColumns: "repeat(4, 1fr)",
        "> * + *": {
          marginBlockStart: "var(--space-m)",
        },
      },
      footerLarge: {
        gridTemplateAreas: `
        'salute salute salute . subscribe subscribe subscribe subscribe'
        '. . . . links links links links'
        `,
        gridTemplateColumns: "repeat(8, 1fr)",
        "> * + *": {
          marginBlockStart: "initial",
        },
      },
    },
  },
});

const FooterLink = styled(Text, {
  textDecoration: "none",
});

export default function Footer() {
  return (
    <StyledFooter
      gridLayoutDefinition={{
        "@initial": "footerSmall",
        "@sm": "footerLarge",
        "@lg": "footerLarge",
      }}
    >
      <FlexColumns
        css={{
          gridArea: "salute",
          "> * + *": {
            marginTop: "var(--space-s)",
          },
        }}
      >
        <Salutation family="serif">stay in the loop</Salutation>

        <FooterCopy family="serif">
          I will occasionally send you an unhealthy curation of my ruminations
          if you input your email and click submit.
        </FooterCopy>
      </FlexColumns>

      <Subscribe />

      <FlexRows
        css={{
          gridArea: "links",
        }}
      >
        <Text
          type="link"
          family="sans"
          target="_blank"
          as="a"
          css={{
            gridColumn: "1",
          }}
        >
          RSS
        </Text>

        <FlexRows
          css={{
            width: "45%",
          }}
        >
          {links.map(({ name, link }, index) => {
            return (
              <Text
                as="a"
                type="link"
                family="sans"
                target="_blank"
                href={link}
                key={index}
              >
                {name}
              </Text>
            );
          })}
        </FlexRows>
      </FlexRows>
    </StyledFooter>
  );
}
