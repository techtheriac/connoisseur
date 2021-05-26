import { useEffect } from "react";
import AltNavigation from "@/components/navigation/AltNavigation";
import styles from "../../styles/BlogLayout.module.scss";
import toggleBackground from "../../helpers/toggleBackground";
import { NavDang } from "../../helpers/Animations";

export default function BlogLayout({ children }) {
  useEffect(() => {
    toggleBackground("#ffffff");
    new NavDang({ el: document.querySelector("[class*='navItems']") });
  }, []);

  return (
    <div className={styles.containerMain}>
      <AltNavigation />
      {children}
    </div>
  );
}
