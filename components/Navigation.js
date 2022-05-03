import React, { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/components/Navigation.module.scss";
import NavDang from "@/helpers/Animations";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <r-cell span={`row`} data-scroll-section className={styles.container}>
      <nav className={`flex-h space-between`}>
        {router.pathname == "/" ? (
          <div>
            <h1 className={styles.name}>Franklin Jezreel</h1>
            <p className={styles.quote}>
              Farouring the relationship between things over their intrinsic
              properties.
            </p>
          </div>
        ) : (
          <button type="button" onClick={() => router.back()}>
            Back
          </button>
        )}

        <div className={`flex-v`}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/musings">
            <a>Musings</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </r-cell>
  );
};

export default Navigation;
