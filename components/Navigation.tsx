import { styled, css } from "stitches.config";
import Link from "next/link";
import { Text } from "./Text";
import Rounded from "./Rounded";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import TextSrcamble from "@/helpers/TextScramble";
import { HybridText, vowelize } from "./HybridText";
type Navigation = {
  link: string;
  name: string;
};

const links: Navigation[] = [
  {
    link: "/cv",
    name: "cv",
  },
  {
    link: "/garden",
    name: "garden",
  },
  {
    link: "/musings",
    name: "musings",
  },
];

const StyledNavigationText = styled(Text, {
  textTransform: "uppercase",
  ":hover": {
    cursor: "pointer",
  },
  fontSize: "var(--idealListingFontSize)",
});

const StyledNavigation = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "var(--space)",
  gridArea: "nav",
  justifyContent: "space-between",
  position: "fixed",
  top: "var(--space-m)",
  left: "var(--space)",
  right: "var(--space)",
  // justifySelf: "end",
  // alignSelf: "start",
});

const NavGroup = styled("div", {
  display: "flex",
  width: "25%",
  justifyContent: "space-between",
});

export default function Navigation() {
  useIsomorphicLayoutEffect(() => {
    const navigationItems = document.querySelectorAll(
      '[data-navigation-item="true"]'
    );

    new TextSrcamble({ elements: navigationItems }).animate();
  }, []);
  return (
    <StyledNavigation>
      <Rounded />
      <NavGroup>
        {links.map((link) => (
          <Link key={link.link} href={link.link}>
            <HybridText
              textContent={link.name}
              contentType="a"
              randomizer={vowelize}
              css={{
                fontSize: "var(--idealListingFontSize)",
                textTransform: "uppercase",
              }}
              data-navigation-item
            />
          </Link>
        ))}
      </NavGroup>
    </StyledNavigation>
  );
}
