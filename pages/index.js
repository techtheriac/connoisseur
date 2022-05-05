import dynamic from "next/dynamic";
import { useEffect } from "react";
import toggleBackground from "@/helpers/toggleBackground";
import Deeds from "@/components/Deeds";
import Bio from "@/components/Bio";
import TiledListing from "@/components/TiledListing";

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
      <Bio />
      <TiledListing
        title="Writing"
        info={info}
        span={`1+3`}
        xspan={`row`}
        xxspan={`row`}
      />
      <TiledListing
        title="Fucking"
        info={info}
        span={`4+3`}
        xspan={`row`}
        xxspan={`row`}
      />
    </div>
  );
}
