import { styled, css } from "stitches.config";
import Text from "@/components/Text";

const BioText = styled(Text, {
  fontSize: "var(--idealArticleParagraphSize)",
  lineHeight: "1.2",
});

const StyledBio = styled("div", {
  gridArea: "bio",
  alignSelf: "start",
  borderTop: "1px solid #EBA293",
  paddingTop: "var(--space-xs)",
});

const Bio = () => (
  <StyledBio>
    <BioText family="serif">
      Jezreel is an ordinary man, kvelling on self inflicted confusedness. He
      writes computer programs for a living whilst occasionally exploring
      generative art, writing poems and nerding out on esoteric landscapes,
      using music as a tool to maintain sanity.
    </BioText>
  </StyledBio>
);

export default Bio;
