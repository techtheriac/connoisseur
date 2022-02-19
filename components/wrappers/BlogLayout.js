import { useEffect } from "react";
import styles from "../../styles/BlogLayout.module.scss";
import toggleBackground from "../../helpers/toggleBackground";
import Head from "next/head";

export default function BlogLayout({ children }) {
  useEffect(() => {
    toggleBackground("#ffffff");    
  }, []);

  return (
    <div className={styles.containerMain}>
      <Head>
        <title> Musing | Franklin Jezreel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>      
      {children}
    </div>
  );
}
