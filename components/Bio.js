import styles from "@/styles/components/Bio.module.scss";

const Bio = () => {
  return (
    <r-cell span={`1-3`} span-s={`row`} data-scroll-section>
      <div>
        <h4 className={``}>About</h4>
        <p>
          I am a Software Engineer specializing in building systems that scale.
        </p>

        <p>
          In my spare time, I tend to explore generative design, working towards
          finding an intersection between code, art and poetry.
        </p>
      </div>
    </r-cell>
  );
};

export default Bio;
