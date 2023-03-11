import { styled, css } from "stitches.config";
import Text from "@/components/Text";
import { StyledCurationTitle, StyledCuration } from "./Curation";
import HorizontalLine from "./HorizontalLine";

const BioText = styled(Text, {
  fontSize: "var(--idealHeadingTwo)",
  lineHeight: "1.2",
  textTransform: "uppercase",
});

const StyledBio = styled("div", {
  gridArea: "bio",
  // maxWidth: "calc(100% - calc(var(--space) * 2))",
  maxWidth: "100%",
  columnWidth: "30em",
  columnGap: "2em",
});

const Bio = () => (
  <StyledBio>
    <BioText family="pixel">
      is an ordinary man kvelling on self-inflicted confusedness. He writes
      computer programs for a living whilst occasionally exploring generative
      art, writing poems and nerding out on esoteric landscapes, using music as
      a tool to maintain sanity. He currently lends his skills to ALAT where he
      builds and maintains backend services. Techtheriac can help you build
      internet things that scale.
    </BioText>
  </StyledBio>
);

export default Bio;
