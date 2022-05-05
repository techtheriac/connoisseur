import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav>
      {router.pathname == "/" ? (
        <div>
          <h1>Franklin Jezreel</h1>
          <p>
            Farouring the relationship between things over their intrinsic
            properties.
          </p>
        </div>
      ) : (
        <button type="button" onClick={() => router.back()}>
          Back
        </button>
      )}

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
