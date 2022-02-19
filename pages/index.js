import dynamic from "next/dynamic";
import { useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import toggleBackground from "@/helpers/toggleBackground";
import Deeds from "@/components/Deeds";
import Bio from "@/components/Bio";

const ThreeWrapper = dynamic(() => import("../components/ThreeWrapper"), {
  ssr: false,
});

const Navigation = dynamic(() => import("../components/Navigation"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    toggleBackground("#c3c3c3");
  });

  return (
    <ThreeWrapper>        
      <main className={styles.containerMain}>
          <Navigation />
          <Bio />
          <Deeds />
      </main>        
    </ThreeWrapper>
  );
}
