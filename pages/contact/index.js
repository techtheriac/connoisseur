import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  const contacts = [
    {
      name: "Twitter",
      link: "https://twitter.com/techtheriac",
    },
    {
      name: "Github",
      link: "https://github.com/techtheriac",
    },
    {
      name: "Email",
      link: "mailto:techtheriac@outlook.com",
    },
  ];

  return (
    <main className={styles.containerContacts}>
      <div className={styles.wrapperBack}>
        {/* <span>
          <svg
            width="50"
            height="50"
            viewBox="0 0 107 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999634 11.9995C9.97463 12.5355 16.0866 13.3635 19.3356 14.4835C22.5856 15.6035 26.1396 18.1095 29.9996 21.9995M107 11.9995H0.999634H107ZM0.999634 11.9995C9.97463 11.4635 16.0866 10.6355 19.3356 9.51551C22.5856 8.39551 26.1396 5.88951 29.9996 1.99951L0.999634 11.9995Z"
              stroke="#203946"
              stroke-width="4"
            />
          </svg>
        </span> */}
      </div>
      <div className={styles.wrapperCards}>
        {contacts.map(({ name, link }) => {
          return (
            <div key={link} className={styles.contactCard}>
              <a href={link}>{name}</a>
              <span></span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Contact;
