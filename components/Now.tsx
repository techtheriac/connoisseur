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
    const targets = document.querySelectorAll("[data-clickable=true]");

    const expand = (item: HTMLElement, i) => {
      targets.forEach((it, ind) => {
        if (i === ind) return;
        it.setAttribute("data-item-clicked", "false");
      });

      gsap.to(targets, {
        width: item.getAttribute("data-item-clicked") == "true" ? "20%" : "15%",
        duration: 2,
        ease: "elastic(1, .6)",
      });

      if (item.getAttribute("data-item-clicked") == "false") {
        item.setAttribute("data-item-clicked", "true");
      }

      if (item.getAttribute("data-item-clicked") == "true") {
        item.setAttribute("data-item-clicked", "false");
      }

      gsap.to(item, {
        width:
          item.getAttribute("data-item-clicked") == "false" ? "40%" : "15%",
        duration: 2.5,
        ease: "elastic(1, .3)",
      });
    };

    targets.forEach((item: HTMLElement, index) => {
      item.setAttribute("data-item-clicked", "false");
      item.addEventListener("click", () => expand(item, index));
    });
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
