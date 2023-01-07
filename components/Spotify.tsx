import { styled } from "stitches.config";
import Text from "./Text";

const SpotifyStyled = styled("div", {
  gridArea: "spotify",
  border: "1px solid #EBA293",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // height: "35vh",
});

const Spotify = () => (
  <SpotifyStyled>
    <Text>This is a place holder for spotify</Text>
  </SpotifyStyled>
);

export default Spotify;
