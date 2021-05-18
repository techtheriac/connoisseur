import Link from "next/link";
import styles from "../../styles/AltNav.module.scss";

const AltNavigation = () => (
  <nav className={styles.containerNav}>
    <ul className={styles.navItems}>
      <li>
        <Link href="/">
          <a>Work</a>
        </Link>
        <span>/</span>
      </li>

      <li>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
        <span>/</span>
      </li>

      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default AltNavigation;
