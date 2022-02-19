import { getPosts } from "BlogInfrastructure";

const PostsPage = ({ posts }) => {
  return (
    <div>
      {/* <PostsLising posts={posts} /> */}
    </div>
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
