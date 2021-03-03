import Link from "next/link";
import Logo from "../atoms/Logo";
import styles from "../../styles/AltNav.module.scss";

const AltNavigation = () => (
  <nav className={styles.containerNav}>
    <div className={styles.icon}>
      <Logo fill="#e0998e" />
    </div>
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
