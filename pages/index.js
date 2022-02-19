import dynamic from "next/dynamic";
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "@/styles/Home.module.scss";
import toggleBackground from "@/helpers/toggleBackground";
import Navigation from "@/components/Navigation";
import Deeds from "@/components/Deeds";

const ThreeWrapper = dynamic(
  () => import("../components/wrappers/ThreeWrapper"),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    toggleBackground('#c3c3c3');
  })
  
  return (    
      <ThreeWrapper>
        <main className={styles.containerMain}>
          <Navigation />
          <section className={styles.containerIntro}>
            <div className={styles.wrapperFuckingName}>              
              <h1 className={styles.fuckingName}>Franklin Jezreel</h1>              
              <p>I am a Software Engineer from Nigeria  <br /> with experience working across various stacks.</p>
            </div>            
          </section>
          
          <Deeds />
        </main>
      </ThreeWrapper>    
  );
}
