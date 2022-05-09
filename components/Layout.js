import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { canUseDOM } from "@/helpers/DOM";
import { styled, css } from "stitches.config";
import Namaste from "./Namaste";

const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

const setDefaultHeight = () =>
  document.documentElement.style.setProperty(
    "--100vh",
    `${window.innerHeight}px`
  );

export default function Layout({ children }) {
  useIsomorphicLayoutEffect(() => {
    setDefaultHeight();
    window.addEventListener("resize", setDefaultHeight);
  });

  return (
    <_Layout
      grid={{
        "@initial": "gridSm",
        "@sm": "gridBase",
      }}
    >
      <Namaste />
      <Navbar />
      <_Main
        gridColumn={{
          "@initial": "gridColumnSm",
          "@sm": "gridColumnBase",
        }}
      >
        {children}
      </_Main>
      <Footer />
    </_Layout>
  );
}

const _Main = styled("main", {
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

const _Layout = styled("div", {
  display: "grid",
  minHeight: "var(--100vh)",
  paddingLeft: "var(--space)",
  paddingRight: "var(--space)",
  paddingTop: "var(--space-m)",
  paddingBottom: "var(--space)",
  backgroundColor: "$tomato100",
  variants: {
    grid: {
      gridBase: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: "var(--space-s)",
      },
      gridSm: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "var(--space-s)",
      },
    },
  },
});
