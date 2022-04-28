import styles from "@/styles/components/Deeds.module.scss";

const Deeds = () => {
  const works = [
    {
      company: "Intelligent Innovations",
      role: "Frontend Developer",
      year: "2020",
      projects: [
        {
          title: "9Pay",
          description: "A Multi-Merchant eCommerce Plarform",
          url: "https://9pay.com.ng",
        },
        {
          title: "9id",
          description:
            "9Mobile backed merchant verification system for small businesses.",
          url: "https://9id.com.ng",
        },
      ],
    },
    {
      company: "KiakiaPrints",
      role: "Frontend Developer",
      year: "2021",
      projects: [
        {
          title: "KiakiaPrints",
          description:
            "Shop for and customize prints on apparels, mugs, banners etc.",
          url: "https://kiakiaprint.com",
        },
      ],
    },
  ];

  return (
    <section id="resume" className={styles.containerWork} data-scroll-section>
      <h2>deeds</h2>
      {works.map(({ role, year, company, projects }) => {
        return (
          <div key={company} className={styles.wrapperWork}>
            <div className={styles.wrapperCompany}>
              <p>{company}</p>
            </div>

            <div className={styles.projectListing}>
              {projects.map(({ title, description, url }) => {
                return (
                  <a href={url} className={styles.project} key={url}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Deeds;
