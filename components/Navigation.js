import React from "react";
import { styled, css } from "stitches.config";
import Link from "next/link";
import Text from "./Text";

const _Navigation = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
  marginRight: "20px",
});

export default function Navigation() {
  return (
    <_Navigation>
      <Link href="/">
        <Text as="a" family="sans" type="link">
          About
        </Text>
      </Link>
      <Link href="/musings">
        <Text as="a" family="sans" type="link">
          Projects
        </Text>
      </Link>
      <Link href="/musings">
        <Text as="a" family="sans" type="link">
          Playlists
        </Text>
      </Link>
    </_Navigation>
  );
}
