import { styled, css } from "stitches.config";
import Navigation from "./Navigation";
import Filter from "./Filter";
import Namaste from "./Namaste";
import Link from "next/link";
import Text from "./Text";

export default function Navbar() {
  return (
    <_Navbar>
      <Link href="/">
        <Text as="a" family="sans" type="link">
          Franklin Jezreel
        </Text>
      </Link>
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
