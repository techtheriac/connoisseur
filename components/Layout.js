import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import Namaste from "./Namaste";
import Grid from "./Grid";
import Main from "./Main";
import gsap from "gsap";
import { TagsProvider } from "./TagsProvider";
import toggleBackground from "@/helpers/toggleBackground";
import Animations from "@/helpers/Events";

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
  });

  return (
    <TagsProvider>
      <Grid
        grid={{
          "@initial": "gridSm",
          "@sm": "gridBase",
        }}
        background="tomato"
        id="layout"
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
    </TagsProvider>
  );
}
