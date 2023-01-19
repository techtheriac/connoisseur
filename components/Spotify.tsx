import { styled } from "stitches.config";
import Text from "./Text";
import Image from "next/image";
// import clementine from "../public/images/clementine.png";
import { StyledCurationTitle } from "./Curation";

const SpotifyStyled = styled("div", {
  gridArea: "spotify",
  display: "flex",
  flexDirection: "column",
});

const StyledSpotifyMedia = styled("div", {
  border: "1px solid #EBA293",
  display: "flex",
});

const Spotify = () => (
  <SpotifyStyled>
    <StyledCurationTitle>now playing</StyledCurationTitle>
    <StyledSpotifyMedia>
      {/* <img
        src="https://res.cloudinary.com/techtheriac/image/upload/v1673124272/clementine_niuq94.png"
        alt="clementine"
        width="278px"
        height="211"
      /> */}
      <div>
        <Text family="sans">Benjamin Clementine</Text>
        <Text family="sans">At Least For Now</Text>
      </div>
    </StyledSpotifyMedia>
  </SpotifyStyled>
);

export default Spotify;
