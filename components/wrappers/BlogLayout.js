import AltNavigation from "@/components/navigation/AltNavigation";
import styles from "../../styles/BlogLayout.module.scss";

export default function BlogLayout({ children }) {
  return (
    <div className={styles.containerMain}>
      <AltNavigation />
      {children}
    </div>
  );
}
