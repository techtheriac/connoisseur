import { useEffect } from "react";
import AltNavigation from "@/components/navigation/AltNavigation";
import styles from "../../styles/BlogLayout.module.scss";
import toggleBackground from "../../helpers/toggleBackground";
import { NavDang } from "../../helpers/Animations";
import Head from "next/head";

export default function BlogLayout({ children }) {
  useEffect(() => {
    toggleBackground("#ffffff");
    new NavDang({
      el: document.querySelector("[class*='navItems']"),
      blur: false,
    });
  }, []);

  return (
    <div className={styles.containerMain}>
      <Head>
        <title> Musing | Franklin Jezreel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AltNavigation />
      {children}
    </div>
  );
}
