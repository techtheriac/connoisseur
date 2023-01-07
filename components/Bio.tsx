import { styled, css } from "stitches.config";
import Text from "@/components/Text";
import { StyledCurationTitle, StyledCuration } from "./Curation";
import HorizontalLine from "./HorizontalLine";

const BioText = styled(Text, {
  fontSize: "var(--idealArticleParagraphSize)",
  lineHeight: "1.2",
});

const StyledBio = styled(StyledCuration, {
  gridArea: "bio",
  // alignSelf: "start",
});

const Bio = () => (
  <StyledBio>
    <StyledCurationTitle as="h3" family="serif">
      Franklin Jezreel
    </StyledCurationTitle>
    <HorizontalLine />
    <BioText family="serif">
      is an ordinary man, kvelling on self inflicted confusedness. He writes
      computer programs for a living whilst occasionally exploring generative
      art, writing poems and nerding out on esoteric landscapes, using music as
      a tool to maintain sanity.
    </BioText>
  </StyledBio>
);

export default Bio;
