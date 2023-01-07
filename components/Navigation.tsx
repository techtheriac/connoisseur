import React from "react";
import { styled, css } from "stitches.config";
import Link from "next/link";
import Text from "./Text";
import Rounded from "./Rounded";

const NavigationText = styled(Text, {
  textTransform: "uppercase",
});

const StyledNavigation = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
  gridArea: "nav",
  justifySelf: "end",
  alignSelf: "start",
});

export default function Navigation() {
  return (
    <StyledNavigation>
      <Rounded />
      <Link href="/">
        <NavigationText as="a" family="sans" type="link">
          cv
        </NavigationText>
      </Link>
      <Link href="/musings">
        <NavigationText as="a" family="sans" type="link">
          projects
        </NavigationText>
      </Link>
      <Link href="/garden">
        <NavigationText as="a" family="sans" type="link">
          Garden
        </NavigationText>
      </Link>
    </StyledNavigation>
  );
}
