import React from "react";
import Grid from "./Grid";
import toggleBackground from "@/helpers/toggleBackground";
import { canUseDOM } from "@/helpers/DOM";
import { styled, css } from "stitches.config";
import Main from "./Main";
import { TagsProvider } from "./TagsProvider";

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
    toggleBackground("#dbd7be");
    window.addEventListener("resize", setDefaultHeight);
  });

  return (
    <TagsProvider>
      <Grid
        grid={{
          "@initial": "articleGrid",
          "@sm": "articleGrid",
        }}
        background="#dbd7be"
      >
        {children}
      </Grid>
    </TagsProvider>
  );
}
