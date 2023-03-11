import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";

const rotater = keyframes({
  "0%": {
    transform: "translate(-50%,-50%) scale(.6), rotate(0deg)",
  },
  "100%": {
    transform: "translate(-50%,-50%) scale(.6), rotate(1turn)",
  },
});

const StyledCursor = styled("div", {
  opacity: "0",
  pointerEvents: "none",
  mixBlendMode: "difference",
  width: "70px",
  height: "70px",
  transition: "transform .35s ease",
  zIndex: "1000",
  backgroundImage: "url(/images/x.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
