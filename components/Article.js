import React from "react";
import Grid from "./Grid";
import toggleBackground from "@/helpers/toggleBackground";
import { canUseDOM } from "@/helpers/DOM";
import { styled, css } from "stitches.config";
import { TagsProvider } from "./TagsProvider";

const ArticleGrid = styled(Grid, {
  paddingLeft: "0",
  paddingRight: "0",
});

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
    toggleBackground("#fbfbfb");
    window.addEventListener("resize", setDefaultHeight);
  });

  return (
    <TagsProvider>
      <ArticleGrid
        grid={{
          "@initial": "articleGrid",
          "@sm": "articleGrid",
        }}
        background="paper"
      >
        {children}
      </ArticleGrid>
    </TagsProvider>
  );
}
