import React from "react";
import Grid from "./Grid";
import Candy from "./Candy";
import toggleBackground from "@/helpers/toggleBackground";
import { canUseDOM } from "@/helpers/DOM";
import { styled, css } from "stitches.config";
import Main from "./Main";

const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

const setDefaultHeight = () =>
  document.documentElement.style.setProperty(
    "--100vh",
    `${window.innerHeight}px`
  );

export default function Article({ children }) {
  useIsomorphicLayoutEffect(() => {
    setDefaultHeight();
    toggleBackground("#fff");
    window.addEventListener("resize", setDefaultHeight);
  });

  return (
    <Grid
      grid={{
        "@initial": "articleGrid",
        "@sm": "articleGrid",
      }}
      background="transparent"
    >
      {children}
    </Grid>
  );
}
