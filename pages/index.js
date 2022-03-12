import dynamic from "next/dynamic";
import { useEffect } from "react";
import toggleBackground from "@/helpers/toggleBackground";
import Deeds from "@/components/Deeds";
import Bio from "@/components/Bio";

const WholeLayout = dynamic(() => import("../components/WholeLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <WholeLayout>
      <Bio />
      <Deeds />
    </WholeLayout>
  );
}
