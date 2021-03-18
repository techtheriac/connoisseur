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
      <div className={styles.musingsList}>
        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Anahilation</div>
          <div className={styles.musingSummary}>
            Life will hold you unresponsible for the longest until you give in
            to the darkness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Anahilation</div>
          <div className={styles.musingSummary}>
            Life will hold you unresponsible for the longest until you give in
            to the darkness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Erstwhile</div>
          <div className={styles.musingSummary}>
            On the shoulders of mad men I stand and bring to you all that the
            devil whispers to my asshole forever
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Parametricism</div>
          <div className={styles.musingSummary}>
            This is just a minor accumulation of fuck ups and madness
          </div>
        </a>

        <a className={styles.musingItem}>
          <div className={styles.musingTitle}>Oatmeal and Wheat</div>
          <div className={styles.musingSummary}>
            I stand in the chambers of Secrets and the unknown for eternity
          </div>
        </a>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.URL}/posts`);
//   const posts = await res.json();
//   return {
//     props: { posts },
//   };
// }
