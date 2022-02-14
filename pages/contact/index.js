import ThreeWrapper from "@/components/wrappers/ThreeWrapper"
import MainNavigation from "@/components/navigation/MainNavigation"

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
    <ThreeWrapper>
      <MainNavigation />
      <main>      
        <div>
          {contacts.map(({ name, link }) => {
            return (
              <div key={link}>
                <a href={link}>{name}</a>
                <span></span>
              </div>
            );
          })}
        </div>
      </main>
    </ThreeWrapper>
  );
};

export default Contact;
