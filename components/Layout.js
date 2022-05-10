import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { canUseDOM } from "@/helpers/DOM";
import { styled } from "stitches.config";
import Namaste from "./Namaste";
import Grid from "./Grid";
import Main from "./Main";

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
    <Grid
      grid={{
        "@initial": "gridSm",
        "@sm": "gridBase",
      }}
      background="tomato"
    >
      <Namaste />
      <Navbar />
      <Main
        gridColumn={{
          "@initial": "gridColumnSm",
          "@sm": "gridColumnBase",
        }}
      >
        {children}
      </Main>
      <Footer />
    </Grid>
  );
}