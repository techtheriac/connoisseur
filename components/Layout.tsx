import React, { useRef } from "react";
import Footer from "./Footer";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import Namaste from "./Namaste";
import Grid from "./Grid";
import Main from "./Main";
import toggleBackground from "@/helpers/toggleBackground";
import Navigation from "./Navigation";



const setDefaultHeight = () =>
  document.documentElement.style.setProperty(
    "--100vh",
    `${window.innerHeight}px`
  );

export default function Layout({ children }) {
  useIsomorphicLayoutEffect(() => {
    setDefaultHeight();
    toggleBackground(`hsla(10, 68%, 46%, 100%)`);
    window.addEventListener("resize", setDefaultHeight);
  }, []);

  return (
      <Grid
        gridAreas={{
          "@initial": "gridBase",
          "@sm": "gridSm"
        }}
        background="tomato"
        data-layout="true"
      >
      <Namaste />
      <Navigation />
        {children}
        <Footer />
      </Grid>
  );
}
