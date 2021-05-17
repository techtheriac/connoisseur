import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainNavigation from "@/components/navigation/MainNavigation";
import Split from "@/components/Split";
import ThreeWrapper from "@/components/wrappers/ThreeWrapper";

export default function Home() {
  useEffect(() => {
    setVh();
    window.addEventListener("resize", setVh);
  });

  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return (
    <ThreeWrapper>
      <main className={styles.containerMain}>
        <MainNavigation />
        <section className={styles.containerIntro}>
          <div className={styles.containerDuragText}>
            <h2 className={styles.durag}>Durag</h2>
          </div>
          <div className={styles.containerDuragText}>
            <h2 className={styles.connoisseur}>Connoisseur</h2>
          </div>

          <div className={styles.containerBio}>
            <div className={styles.dcseanImg}>
              <img src={`/duotone.png`} />
            </div>

            <div className={styles.connoisseurRant}>
              <p>I don't sell durags</p>
              <p>I make internet things.</p>
              <p>Cheers </p>
            </div>
          </div>
        </section>
        {/* <Split /> */}
      </main>
    </ThreeWrapper>
  );
}
