import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "../styles/Home.module.scss";
import MainNavigation from "@/components/navigation/MainNavigation";

const ThreeWrapper = dynamic(
  () => import("../components/wrappers/ThreeWrapper"),
  { ssr: false }
);

export default function Home() {
  const works = [
    {
      company: "Intelligent Innovations",
      role: "Frontend Developer",
      year: "2020",
      projects: [
        {
          title: "9Pay",
          description: "A Multi-Merchant eCommerce Plarform",
          url: "https://9pay.com.ng",
        },
        {
          title: "9id",
          description:
            "9Mobile backed merchant verification system for small businesses.",
          url: "https://9id.com.ng",
        },
      ],
    },
    {
      company: "KiakiaPrints",
      role: "Frontend Developer",
      year: "2021",
      projects: [
        {
          title: "KiakiaPrints",
          description:
            "Shop for and customize prints on apparels, mugs, banners etc.",
          url: "https://kiakiaprint.com",
        },
      ],
    },
  ];

  return (
    <div>
      <ThreeWrapper>
        <main className={styles.containerMain}>
          <MainNavigation />
          <section className={styles.containerIntro}>
            <div className={styles.containerDuragText}>
              <h2 className={styles.durag}>Franklin</h2>
            </div>
            <div className={styles.containerDuragText}>
              <h2 className={styles.connoisseur}>Jezreel</h2>
            </div>

            <div className={styles.containerBio}>
              <div className={styles.dcseanImg}>
                <img src={`/duotone.jpg`} alt="Franklin Jezreel image" />
              </div>

              <div className={styles.connoisseurRant}>
                <p>I don't sell durags!</p>
                <p>With a knack for aesthetics,</p>
                <p>I make internet things that scale.</p>
                <p>Wanna take your business online?</p>
                <p>
                  <a href="mailto:techtheriac@outlook.com">Hit me up</a>
                </p>
                <p>Cheers </p>
              </div>
            </div>
          </section>
          <section id="resume" className={styles.containerWork}>
            <h2>deeds</h2>
            {works.map(({ role, year, company, projects }) => {
              return (
                <div key={company} className={styles.wrapperWork}>
                  <div className={styles.wrapperCompany}>
                    <p>{year}</p>
                    <p>{company}</p>
                  </div>

                  <div className={styles.projectListing}>
                    {projects.map(({ title, description, url }) => {
                      return (
                        <div className={styles.project} key={url}>
                          <h3>
                            <a href={url}>{title}</a>
                          </h3>
                          <p>{description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      </ThreeWrapper>
    </div>
  );
}
