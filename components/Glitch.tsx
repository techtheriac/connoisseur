import Techtheriac from "./Techtheriac";
import { styled } from "stitches.config";
import { HybridText, vowelize } from "./HybridText";

const StyledGlitchContainer = styled("div", {
  gridArea: "glitch",
  display: "flex",
  height: "70vh",
  // justifyContent: "center",
  // alignItems: "flex-end",
  flexDirection: "column-reverse",
  // backgroundImage: "url(/images/bg-grain-dark.png)",
  backgroundSize: "contain",
  // borderTop: "1px solid rgba(101, 101, 101, 0.37)",
  boxShadow: "10px 10px 20px -9px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  paddingTop: "var(--space)",
  // paddingBottom: "var(--space)",
});

const Name = styled("h1", {
  fontFamily: "$sansSerif",
  fontSize: "20vw",
  color: "white",
});

const Glitch = () => {
  return (
    <StyledGlitchContainer>
      {/* <Techtheriac /> */}
      {/* <HybridText
        textContent="Franklin"
        contentType="h1"
        randomizer={vowelize}
        seed="an"
        css={{
          fontSize: "17vw",
          textTransform: "uppercase",
        }}
      /> */}
      <HybridText
        textContent="techtheriac"
        contentType="h1"
        randomizer={vowelize}
        seed="rt"
        css={{
          fontSize: "12rem",
          textTransform: "uppercase",
        }}
      />
    </StyledGlitchContainer>
  );
};

export default Glitch;
