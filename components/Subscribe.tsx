import { styled, css } from "stitches.config";
import Text from "./Text";

const StyledSubscribe = styled("form", {
  height: "45px",
  display: "flex",
  alignItems: "center",
  gridArea: "subscribe",
});

export default function Subscribe() {
  return (
    <StyledSubscribe>
      <Input placeholder="Your email"></Input>
      <Button>
        <Text family="sans">Submit</Text>
      </Button>
    </StyledSubscribe>
  );
}

const Input = styled("input", {
  appearance: "none",
  width: "100%",
  height: "100%",
  border: 0,
  borderStyle: "none",
  borderWidth: "2px",
  fontSize: "var(--idealSansFontSize)",
  color: "white",
  outline: "none",
  fontFamily: "$sansSerif",
  padding: "10px 5px",
  backgroundColor: "#00000014",
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
  "&::placeholder": {
    fontFamily: "$sansSerif",
    fontSize: "var(--idealSansFontSize)",
    color: "$tomato200",
  },
  length: 0,
});

const Button = styled("button", {
  border: "none",
  borderRadius: "$base",
  borderColor: "$tomato200",
  borderWidth: "2px",
  backgroundColor: "$tomato300",
  padding: "10px 20px",
  color: "white",
  outline: "none",
  boxShadow: "none",
  marginLeft: "-95px",
  "&:hover": {
    backgroundColor: "$tomato400",
  },
  length: 0,
});
