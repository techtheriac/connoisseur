import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { canUseDOM } from "@/helpers/DOM";
import { styled, css } from "stitches.config";

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
    <Layout_Styled
      grid={{
        "@initial": "gridSm",
        "@sm": "gridBase",
      }}
    >
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
    </Layout_Styled>
  );
}

const _Main = styled("main", {
  variants: {
    gridColumn: {
      gridColumnBase: {
        gridColumn: "5 / -1",
      },
      gridColumnSm: {
        gridColumn: "1 / -1",
      },
    },
  },
});

const Layout_Styled = styled("div", {
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
