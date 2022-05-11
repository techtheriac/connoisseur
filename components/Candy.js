import { styled } from "stitches.config";

const Light = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: "-1",
});

const Bulb = styled("div", {
  position: "absolute",
  top: "-86%",
  left: "50%",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  background: "#B2D8F7",
});

const Glow = styled("div", {
  top: "-100%",
  left: "-100%",
  width: "400%",
  height: "400%",
  borderRadius: "50%",
  // background: "$tomato100",
  backgroundImage:
    "radial-gradient(circle, #C54126 0%, #C54126 25%, rgb(255 255 255) 52%, rgb(255 255 255) 100%)",
  //"radial-gradient(circle, hsla(10,69%,75%, 100%) 0%, hsla(10,69%,75%, 100%) 25%, hsl(240, 0%, 88) 52%, hsl(240, 0%, 88) 100%)",
});

export default function Candy() {
  return (
    <Light>
      <Bulb>
        <Glow />
      </Bulb>
    </Light>
  );
}
