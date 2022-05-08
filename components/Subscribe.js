import { styled, css } from "stitches.config";
import Text from "./Text";

const _Subscribe = styled("form", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  gap: "10px",
  maxHeight: "30px",
});

export default function Subscribe() {
  return (
    <_Subscribe>
      <Input placeholder="Enter your email address"></Input>
      <Button>
        <Text>DingBat!</Text>
      </Button>
    </_Subscribe>
  );
}

const Input = styled("input", {
  borderRadius: "$base",
  borderColor: "$tomato200",
  borderWidth: "2px",
  padding: "20px",
  backgroundColor: "transparent",
  fontFamily: "$sansText",
  fontSize: "var(--idealSansFontSize)",
  color: "white",
  appearance: "none",
  outline: "none",

  "&::placeholder": {
    fontFamily: "$sansText",
    fontSize: "var(--idealSansFontSize)",
    color: "$tomato200",
  },
});

const Button = styled("button", {
  display: "inline-block",
  border: "none",
  borderRadius: "$base",
  borderColor: "$tomato200",
  borderWidth: "2px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  backgroundColor: "$tomato300",
  color: "white",
  outline: "none",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "transparent",
  },
});
