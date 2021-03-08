import styles from "../../styles/Musings.module.scss";
import Head from "next/head";
import Link from "next/link";
import AltNavigation from "../../components/navigation/AltNavigation";
import * as S from "sanctuary";

export default function Musings({ posts }) {
  const BlogListing = (x) => (
    <div key={x.id}>
      <Link href={`/musings/${x.slug}`}>
        <a>
          <h1>{x.title}</h1>
        </a>
      </Link>
    </div>
  );

  return (
    <div className={styles.containerMusings}>
      <AltNavigation />
      {S.map(BlogListing)(posts)}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.URL}/posts`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}
