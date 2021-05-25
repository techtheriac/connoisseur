import { useEffect } from "react";
import AltNavigation from "@/components/navigation/AltNavigation";
import styles from "../../styles/BlogLayout.module.scss";
import toggleBackground from "../../helpers/toggleBackground";

export default function BlogLayout({ children }) {
  useEffect(() => {
    toggleBackground("#fbece2");
  }, []);

  return (
    <div className={styles.containerMain}>
      <AltNavigation />
      {children}
    </div>
  );
}
