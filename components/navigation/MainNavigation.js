import Link from "next/link";
import styles from "../../styles/MainNav.module.scss";
import Logo from "../atoms/Logo";

const MainNavigation = () => (
  <nav className={styles.containerNav}>
    <ul className={styles.navItems}>
      <li>
        <Link href="/">
          <a>Work</a>
        </Link>
      </li>

      <li>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
