import { styled, css } from "stitches.config";
import { useRef, useState } from "react";
import Text from "./Text";
import Image from "next/image";
import Rounded from "./Rounded";
import { StyledCurationTitle } from "./Curation";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import { Bouncible, Clickable } from "@/helpers/Bouncible";
import gsap from "gsap";

const NowStyled = styled("div", {
  gridArea: "spotify",
  height: "30vh",
  width: "100%",
  position: "relative",
  zIndex: "200",
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  "> * + *": {
    marginLeft: "20px",
  },
});

const StyledSpotifyMedia = styled("div", {
  backgroundImage:
    "url(https://images.unsplash.com/photo-1598078412711-93b01b0fb206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)",
  height: "100%",
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
      {[1, 2, 3, 4, 5].map((i, index) => {
        return (
          <StyledSpotifyMedia key={index} data-clickable data-item-clicked />
        );
      })}
    </NowStyled>
  );
};

export default Now;
