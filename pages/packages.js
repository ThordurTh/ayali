import React from "react";
import Link from "next/link";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import { motion } from "framer-motion";

function packages({ setActiveLink, lang }) {
  const currentPage = 3;

  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>{lang.packages.title}</title>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Packages"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <section className="packages-hero">
        <h1>{lang.packages.heading}</h1>
        <p>{lang.packages.p}</p>
      </section>

      <section className="packages">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="free_call"
        >
          <h3>{lang.packages.h3free}</h3>
          <p>{lang.packages.p1free}</p>
          <p>{lang.packages.p2free}</p>

          <div className="packages-button-container">
            <Link href="../contact?value=package1">
              <a onClick={() => activeLink()} className="cta">
                {lang.packages.button}
              </a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <h3>{lang.packages.h3fixed}</h3>
          <span></span>
          <ul>
            {lang.packages.lifixed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="packages-button-container">
            <Link href="../contact?value=package2">
              <a onClick={() => activeLink()} className="cta">
                START NOW
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="middle-package"
        >
          <h3>{lang.packages.h3hybrid}</h3>
          <span></span>
          <ul>
            {lang.packages.lihybrid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="packages-button-container">
            <Link href="../contact?value=package3">
              <a onClick={() => activeLink()} className="cta">
                START NOW
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          <h3>{lang.packages.h3performance}</h3>
          <span></span>
          <ul>
            {lang.packages.liperformance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="packages-button-container">
            <Link href="../contact?value=package4">
              <a onClick={() => activeLink()} className="cta">
                START NOW
              </a>
            </Link>
          </div>
        </motion.div>
      </section>
      <FooterNav
        currentPage={currentPage}
        setActiveLink={setActiveLink}
      ></FooterNav>
    </>
  );
}

export default packages;
