import { styled, css } from "stitches.config";

export default function Filter() {
  return (
    <_Filter>
      <p>Musings</p>
      <p>On Engineering</p>
      <p>Capsules</p>
      <p>Journal</p>
    </_Filter>
  );
}

const _Filter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-s)",
});
