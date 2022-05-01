import styles from "@/styles/components/Bio.module.scss";

const Bio = () => {
  return (
    <r-cell
      span={`1-4`}
      span-s={`row`}
      // className={styles.containerIntro}

      data-scroll-section
    >
      <div>
        <h1>Hi, I'm</h1>
        <h1 className={styles.fuckingName}>Franklin Jezreel</h1>
        <p className={styles.bio}>
          A Software Engineer with experience working across various stacks.
        </p>
        <p className={styles.bio}>
          Based in Nigeria, I currently work at Wema With a focus on buidling
          Microservices for{" "}
          <a href="https://alat.ng/" target="_blank">
            ALAT
          </a>{" "}
        </p>
        <p className={styles.bio}>
          I can help you{" "}
          <a href="mailto:techtheriac@outlook.com" target="_blank">
            build
          </a>{" "}
          internet things that scale
        </p>
      </div>
    </r-cell>
  );
};

export default Bio;
