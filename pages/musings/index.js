import { getPosts } from "BlogInfrastructure";

const PostsPage = ({ posts }) => {
  const sections = [
    {
      name: "Engineering Ramblings",
      link: "/",
    },
    {
      name: "Poetry",
      link: "/",
    },
    {
      name: "Journal",
      link: "/",
    },
  ];

  return (
    <main className={styles.wrapperMusings}>
      {sections.map((section, index) => {
        return (
          <a key={index} href={section.link}>
            {section.name}
          </a>
        );
      })}
    </main>
  );
};

export async function getStaticProps() {
  const notionPosts = await getPosts();

  const results = notionPosts.results;

  results.forEach((elem) => {
    console.log(elem.properties);
  });

  return {
    props: {},
  };
}

export default PostsPage;
