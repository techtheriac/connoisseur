import react from "react";
import styles from "../styles/components/Code.module.scss";

const Code = ({ children }) => {
  return (
    <pre className={styles.preText}>
      <code className={styles.codeText}>{children}</code>
    </pre>
  );
};

export default Code;
