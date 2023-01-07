import { getPosts } from "infrastructure/BlogInfrastructure";

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
    <main>
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

  const properties = results.map((x) => {
    return {
      title: x.properties.slug,
      slug: "",
      dateCreated: "",
    };
  });
  results.forEach((elem) => {
    console.log(elem.properties);
  });

  return {
    props: {},
  };
}

export default PostsPage;
