import { styled } from "stitches.config";
import Navigation from "./Navigation";
import Filter from "./Filter";
import Namaste from "./Namaste";

export default function Navbar() {
  return (
    <_Navbar>
      <Namaste />
      <Navigation />
      <Filter />
    </_Navbar>
  );
}

const _Navbar = styled("div", {
  gridColumn: "1 / -1",
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
});
