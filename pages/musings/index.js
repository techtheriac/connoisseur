import styles from "../styles/Musings.module.scss";
import Head from "next/head";

import AltNavigation from "../../components/navigation/AltNavigation";

export default function Musings() {
  return (
    <div className={styles.containerMusings}>
      <AltNavigation />
    </div>
  );
}
