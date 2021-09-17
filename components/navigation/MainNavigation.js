import Link from "next/link";
import styles from "../../styles/MainNav.module.scss";

const MainNavigation = () => (
  <nav className={styles.containerNav}>
    <ul className={styles.navItems}>
      <li>
        <a href="#resume">Work</a>
      </li>

      <li>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
