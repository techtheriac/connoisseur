// import * as S from "sanctuary";

// export default function Post({ post }) {
//   return <p>{post.content}</p>;
// }

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.URL}/posts`);
//   const posts = await res.json();

//   const paths = S.map((post) => ({ params: { slug: post.slug } }))(posts);

//   return {
//     paths,
//     // for incremental static generation, change to true
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const res = await fetch(`${process.env.URL}/posts?slug=${slug}`);
//   const post = await res.json();

//   return {
//     props: {
//       post: post[0],
//     },
//   };
// }
