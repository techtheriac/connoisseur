import { styled, css } from "stitches.config";
import Link from "next/link";

const _Navigation = styled("div", {
  display: "flex",
});

export default function Navigation() {
  return (
    <_Navigation>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/musings">
        <a>Projects</a>
      </Link>
    </_Navigation>
  );
}
