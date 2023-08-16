import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import instagram from "../assets/instagram.webp";
import facebook from "../assets/facebook.webp";
import email from "../assets/email-icon.webp";
import gmail from "../assets/gmail.webp";
import strategy from "../assets/strategy.webp";
import target from "../assets/target.webp";
import chart from "../assets/chart-up.webp";
import speakerphone from "../assets/speakerphone.webp";
import piechart from "../assets/pie-chart.webp";
import FooterNav from "@components/FooterNav";
import { motion } from "framer-motion";

function services({ setActiveLink, lang }) {
  const currentPage = 2;
  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>{lang.services.title}</title>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Services"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <section className="services-hero">
        <h1>{lang.services.heading}</h1>
        <p>{lang.services.p}</p>
      </section>

      <section className="strategies">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <h3>{lang.services.h3tactics}</h3>
          <ul>
            {lang.services.litactics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="icons-container">
            <Image
              src={instagram}
              width={48.81}
              height={48}
              alt="instagram icon"
            />
            <Image
              src={facebook}
              width={48.81}
              height={48}
              alt="facebook icon"
            />
            <Image src={email} width={61.08} height={48} alt="mail icon" />
            <Image src={gmail} width={48.77} height={48} alt="google icon" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="sales-marketing"
        >
          <h3>MARKETING STRATEGY</h3>
          <ul>
            {lang.services.listrategy.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="icons-container">
            <Image src={strategy} width={48} height={48} alt="strategy icon" />
            <Image src={target} width={48} height={48} alt="target icon" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          <h3>OVERALL BUSINESS OBJECTIVES</h3>
          <ul>
            {lang.services.liobjectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="icons-container">
            <Image src={chart} width={48} height={48} alt="chart icon" />
            <Image src={piechart} width={48} height={48} alt="pie chart icon" />
            <Image
              src={speakerphone}
              width={48}
              height={48}
              alt="speakerphone icon"
            />
          </div>
        </motion.div>
        <motion.div
          className="motion-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          <Link href="/packages">
            <a onClick={() => activeLink("/packages")} className="cta">
              {lang.services.button}
            </a>
          </Link>
        </motion.div>
      </section>
      <FooterNav
        currentPage={currentPage}
        setActiveLink={setActiveLink}
      ></FooterNav>
    </>
  );
}

export default services;
