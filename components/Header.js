import Image from "next/image";
import styles from "../styles/Header.module.scss";
import MainNavigation from "./navigation/MainNavigation";

const Header = () => {
  return (
    <main className={styles.containerHeader}>
      <MainNavigation />
      <div className={styles.contentHeader}>
        <div className={styles.imageContainer}>
          <Image src="/durag-main.png" width={565} height={747} />
        </div>
        <div className={styles.textConnoisseur}>
          <h1>Durag</h1>
          <h1>
            Connois <br />
            seur
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Header;
