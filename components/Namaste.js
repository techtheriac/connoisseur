import React from "react";
import Text from "./Text";
import TextScramble from "@/helpers/scramble";
import { canUseDOM } from "@/helpers/DOM";

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
    <Text
      as="a"
      family="sans"
      type="link"
      ref={scrambleElement}
      css={{
        position: "absolute",
        top: "var(--space-m)",
        left: "var(--space)",
      }}
    >
      Franklin Jezreel
    </Text>
  );
}
