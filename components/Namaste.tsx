import React from "react";
import Text from "./Text";
import { styled, css } from "stitches.config";

const NamasteContainer = styled("div", {
  gridArea: "name",
  alignSelf: "end",
});

const NamasteText = styled(Text, {
  fontSize: "var(--idealHeadingTwo)",
});

export default function Namaste() {
  return (
    <NamasteContainer>
      <NamasteText as="h2" family="serif">
        Jezreel Obidike Franklin
      </NamasteText>
    </NamasteContainer>
  );
}
