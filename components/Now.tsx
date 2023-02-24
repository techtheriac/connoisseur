import { styled } from "stitches.config";
import Text from "./Text";
import Image from "next/image";
// import clementine from "../public/images/clementine.png";
import { StyledCurationTitle } from "./Curation";

const NowStyled = styled("div", {
  gridArea: "spotify",
  display: "grid",
  gridTemplateAreas: `
  'first first'
  'first first'
  `,
  flexDirection: "column",
  height: "30vh",
  border: "1px solid #EBA293",
});

const StyledSpotifyMedia = styled("div", {
  border: "1px solid #EBA293",
  display: "flex",
  height: "100%",
  gridArea: "first",
  gridColumn: "1 / span 2",
  variants: {
    background: {
      forest: {
        backgroundColor: "#816729",
      },
    },
    elevation: {
      over: {
        zIndex: 2,
      },
    },
  },
});

const Now = () => (
  <NowStyled>
    <StyledSpotifyMedia>
      <div>
        <Text family="sans">Benjamin Clementine</Text>
        <Text family="sans">At Least For Now</Text>
      </div>
    </StyledSpotifyMedia>
    <StyledSpotifyMedia background="forest" elevation="over">
      <div>
        <Text family="sans">Fuck me numb</Text>
        <Text family="sans">At Least For Now</Text>
      </div>
    </StyledSpotifyMedia>
  </NowStyled>
);

export default Now;
