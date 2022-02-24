import dynamic from "next/dynamic";
import { getPosts } from "BlogInfrastructure";
import styles from "@/styles/Musings.module.scss";

const WholeLayout = dynamic(() => import("../../components/WholeLayout"), {
  ssr: false,
});

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
    <WholeLayout>
      <main className={styles.wrapperMusings}>
        {sections.map((section, index) => {
          return (
            <a
              className={styles.musingSectionName}
              key={index}
              href={section.link}
            >
              {section.name}
            </a>
          );
        })}
      </main>
    </WholeLayout>
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
