import Grid from "./Grid";
import Candy from "./Candy";

export default function Article({ children }) {
  return (
    <Grid
      grid={{
        "@initial": "gridSm",
        "@sm": "gridBase",
      }}
      background="transparent"
    >
      <Candy />
      {children}
    </Grid>
  );
}
