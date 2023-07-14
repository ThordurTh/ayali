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
import { useState } from "react";

function services({ setActiveLink }) {
  const currentPage = 2;
  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>AYA LI - Services</title>
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
        <h1>TAILORED SOLUTIONS</h1>
        <p>
          Scale your eCommerce business by successfully overcoming your
          marketing challenges with a tailored digital marketing strategy.
        </p>
      </section>

      <section className="strategies">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <h3>DIGITAL MARKETING TACTICS</h3>
          <ul>
            <li>Paid ads: Facebook, Instagram & TikTok</li>
            <li>E-mail marketing</li>
            <li>Google Ads</li>
            <li>Copywriting that converts</li>
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
            <li>Market and Competitor Analysis</li>
            <li>Customer Persona and Targeting Strategy</li>
            <li>Omnichannel and Funnel Strategy</li>
            <li>Branding and Communication Strategy</li>
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
            <li>Increase Online Sales</li>
            <li>Expand Customer Base</li>
            <li>Enhance Brand Awareness</li>
            <li>Improve Customer Engagement and Retention</li>
            <li>Optimize Website Performance</li>
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
              See Packages
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
