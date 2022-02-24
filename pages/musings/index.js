import dynamic from "next/dynamic";
import { getPosts } from "BlogInfrastructure";

const WholeLayout = dynamic(() => import("../../components/WholeLayout"), {
  ssr: false,
});

const PostsPage = ({ posts }) => {
  const sections = [
    {
      name: "Ramblings",
      link: "/"
    },
    {
      name: "Poetry",
      link: "/"
    },
    {}
  ];

  return (
     <WholeLayout>
      <div>
        {
          sections.map((section, index) => {
            return (
              <a key={index} href={section.link}>{section.name}</a>
              )
            })
          } 
      </div>
      </WholeLayout>
  
  );
};

export async function getStaticProps() {

  const notionPosts = await getPosts()

  const results = notionPosts.results;

  results.forEach((elem) => {
    console.log(elem.properties)
  })
  
  return {
    props: {  },
  };
}

export default PostsPage;
