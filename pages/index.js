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
            <div className={styles.wrapperFuckingName}>
              <h1 className={styles.fuckingName}>Franklin</h1>
              <h1 className={styles.fuckingName}>Jezreel</h1>
            </div>
            {/* <div className={styles.wrapperBio}>
              <p>I am a software developer with so much fucking experience</p>
            </div> */}
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
