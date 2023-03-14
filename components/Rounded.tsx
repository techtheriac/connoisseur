import { styled, css } from "stitches.config";

const Rounded = styled("div", {
  backgroundColor: "#BC703B",
  width: "var(--idealSansFontSize)",
  height: "var(--idealSansFontSize)",
  borderRadius: "50%",
  length: 0,
  variants: {
    color: {
      pulse: {
        backgroundColor: "red",
      },
    },
  },
});

export default Rounded;
