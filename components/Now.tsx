import { styled, css } from "stitches.config";
import { useRef, useState } from "react";
import { Text } from "./Text";
import Image from "next/image";
import Rounded from "./Rounded";
import { StyledCurationTitle } from "./Curation";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import { Bouncible, Clickable } from "@/helpers/Bouncible";
import gsap from "gsap";

const SpotifyMediaWrapper = styled("div", {
  width: "100%",
  position: "relative",
  textAlign: "center",
  whiteSpace: "nowrap",
  "> [data-clickable='true'] + [data-clickable='true']": {
    marginLeft: "20px",
  },
});

const NowStyled = styled("div", {
  gridArea: "spotify",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-xs)",
  zIndex: "200",
  overflow: "hidden",
});

const StyledSpotifyMedia = styled("div", {
  backgroundImage:
    "url(https://images.unsplash.com/photo-1598078412711-93b01b0fb206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)",
  height: "100px",
  width: "calc(20% - 20px)",
  backgroundPosition: "center",
  display: "inline-block",
  cursor: "pointer",
  backgroundSize: "contain",
  // borderRadius: "50px",
  clipPath: `polygon(
    8px 0%,
    0% 8px,
    0% calc(100% - 8px),
    8px 100%,
    calc(100% - 8px) 100%,
    100% calc(100% - 8px),
    100% 8px,
    calc(100% - 8px) 0%
  )`,
});

const Now = () => {
  useIsomorphicLayoutEffect(() => {
    const targets: NodeListOf<Clickable> = document.querySelectorAll(
      "[data-clickable=true]"
    );
    new Bouncible({ elements: targets }).animate();
  }, []);

  return (
    <NowStyled>
      <Rounded color="pulse" />
      <SpotifyMediaWrapper>
        {[1, 2, 3, 4, 5].map((i, index) => {
          return <StyledSpotifyMedia key={index} data-clickable />;
        })}
      </SpotifyMediaWrapper>
    </NowStyled>
  );
};

export default Now;
