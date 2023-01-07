import React from "react";
import { styled, css } from "stitches.config";
import Navigation from "./Navigation";
import Filter from "./Filter";
import Link from "next/link";
import Text from "./Text";
import TextScramble from "@/helpers/scramble";
import { canUseDOM } from "@/helpers/DOM";

const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

export default function Navbar() {
  return (
    <StyledNavbar
      gridColumn={{
        "@initial": "gridColumnSm",
        "@sm": "gridColumnBase",
      }}
    >
      <Navigation />
      <Filter />
    </StyledNavbar>
  );
}

const StyledNavbar = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",

  variants: {
    gridColumn: {
      gridColumnBase: {
        gridColumn: "6 / -1",
      },
      gridColumnSm: {
        gridColumn: "3 / -1",
      },
    },
  },
  length: 0,
});
