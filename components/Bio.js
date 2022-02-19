import styles from "@/styles/components/Bio.module.scss";

const Bio = () => {
  return (
    <section className={styles.containerIntro}>
    <div className={styles.wrapperFuckingName}>
      <h1 className={styles.fuckingName}>Franklin Jezreel</h1>              
      <p className={styles.bio}>I am a Software Engineer from Nigeria  <br /> with experience working across various stacks.</p>
    </div>            
  </section>
  )
}

export default Bio;