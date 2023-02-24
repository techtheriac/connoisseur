import { styled } from "stitches.config";
import Link from "next/link";
import Text from "./Text";
import Rounded from "./Rounded";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import TextSrcamble from "@/helpers/TextScramble";

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
});

const StyledNavigation = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "var(--space-s)",
  gridArea: "nav",
  justifySelf: "end",
  alignSelf: "start",
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
      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          <StyledNavigationText as="a" family="sans" data-navigation-item>
            {link.name}
          </StyledNavigationText>
        </Link>
      ))}
      <Rounded />
    </StyledNavigation>
  );
}
