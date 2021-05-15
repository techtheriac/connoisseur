import { useLayoutEffect, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainNavigation from "@/components/navigation/MainNavigation";
// import Asshole from "@/components/Asshole";
import Split from "@/components/Split";
import ThreeWrapper from "@/components/wrappers/ThreeWrapper";

export default function Home() {
  useLayoutEffect(() => {
    setVh();
    window.addEventListener("onresize", () => {
      setVh();
    });
  });

  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return (
    <ThreeWrapper>
      <main className={styles.containerMain}>
        <MainNavigation />

        <Split />
      </main>
    </ThreeWrapper>
  );
}
