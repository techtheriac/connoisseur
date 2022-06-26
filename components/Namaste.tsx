import React from "react";
import Text from "./Text";
import TextScramble from "@/helpers/scramble";
import type * as Stitches from "@stitches/react";
import { styled, css } from "stitches.config";
import Rounded from "./Rounded";
import { canUseDOM } from "@/helpers/DOM";

const NamasteContainer = styled("div", {
  position: "fixed",
  top: "var(--space-m)",
  left: "var(--space)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  length: 0,
});

const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

export default function Namaste() {
  const scrambleElement = React.useRef();

  useIsomorphicLayoutEffect(() => {
    const phrases = ["Franklin Jezreel", "techtheriac", "Designer"];
    const scramble = new TextScramble(scrambleElement.current);
    let counter = 0;
    const next = () => {
      scramble.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  });

  return (
    <NamasteContainer>
      <Rounded />
      <Text as="a" family="sans" type="link" ref={scrambleElement}>
        Franklin Jezreel
      </Text>
    </NamasteContainer>
  );
}
