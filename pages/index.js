import dynamic from "next/dynamic";
import { useEffect } from "react";
import toggleBackground from "@/helpers/toggleBackground";
import Deeds from "@/components/Deeds";
import Bio from "@/components/Bio";
import TiledListing from "@/components/TiledListing";
import { styled } from "../stitches.config";

const Text = styled("p", {
  fontFamily: "$system",
  color: "$hiContrast",

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});

export default function Home() {
  const info = [
    {
      title: "The verge of stone",
      meta: "June 24 2021",
    },
    {
      title: "The verge of stone",
      meta: "June 24 2021",
    },
    {
      title: "The verge of stone",
      meta: "June 24 2021",
    },
    {
      title: "The verge of stone",
      meta: "June 24 2021",
    },
  ];
  return (
    <div>
      <Text as="h1" size="3">
        Hello, from Stitches.
      </Text>
      <Bio />
      <TiledListing title="Writing" info={info} />
      <TiledListing title="Fucking" info={info} />
    </div>
  );
}
