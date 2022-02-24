import styles from "@/styles/components/Bio.module.scss";

const Bio = () => {
  return (
    <section className={styles.containerIntro}>
    <div className={styles.wrapperFuckingName}>
      <h2>Hi, I'm</h2>
      <h1 className={styles.fuckingName}>Franklin Jezreel</h1>              
      <p className={styles.bio}>A Software Engineer with experience working across various stacks.</p>
      <p className={styles.bio}>Based in Nigeria, I currently work at Wema With a focus on buidling Microservices for <a href="https://alat.ng/" target="_blank">ALAT</a> </p>
      <p className={styles.bio}>I can help you build internet things that scale: <a href="mailto:techtheriac@outlook.com" target="_blank">Hit me up</a> </p>
    </div>            
  </section>
  )
}

export default Bio;