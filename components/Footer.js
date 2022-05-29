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
    link: "https://github/techtheriac",
  },
  {
    name: "VSCO",
    link: "https://vsco.co/jaefaux",
  },
];

const _Footer = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(3, auto)",
  gap: "var(--space-s)",
  variants: {
    gridColumn: {
      gridColumnBase: {
        gridColumn: "6 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },
  },
});

const Flex = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "baseline",
});

const Others = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
});

const FooterLink = styled(Text, {
  textDecoration: "none",
});

export default function Footer() {
  return (
    <_Footer
      gridColumn={{
        "@initial": "gridColumnSm",
        "@sm": "gridColumnBase",
      }}
    >
      <Text
        family="serif"
        css={{
          fontSize: "var(--idealListingFontSize)",
          marginBottom: "-40px",
        }}
      >
        Favouring the relationship between things over their intrinsic
        properties.
      </Text>

      <Subscribe />

      <Others>
        <Text
          type="link"
          family="sans"
          as="a"
          css={{
            fontSize: "var(--idealListingFontSize)",
            gridColumn: "1",
          }}
        >
          RSS
        </Text>

        <Flex
          css={{
            gridColumn: "2",
          }}
        >
          {links.map(({ name, link }, index) => {
            return (
              <Text type="link" family="sans" as="a" href={link} key={index}>
                {name}
              </Text>
            );
          })}
        </Flex>
      </Others>
    </_Footer>
  );
}
