import Techtheriac from "./Techtheriac";
import { styled } from "stitches.config";

const StyledGlitchContainer = styled("div", {
  gridArea: "glitch",
  display: "flex",
  height: "70vh",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundImage: "url(/images/bg-grain-dark.png)",
  backgroundSize: "contain",
  borderLeft: "1px solid rgba(101, 101, 101, 0.37)",
  boxShadow: "10px 10px 20px -9px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  paddingBottom: "var(--space)",
});

const Glitch = () => {
  return (
    <StyledGlitchContainer>
      <Techtheriac />
    </StyledGlitchContainer>
  );
};

export default Glitch;
