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

function services() {
  const currentPage = 2;
  return (
    <>
      <Head>
        <title>AYA LI - Services</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
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
              <li>Social Media Marketing: Facebook and Instagram </li>
              <li>E-mail marketing</li>
              <li>Google Ads</li>
              <li>Copywriting that converts</li>
            </ul>
            <p>
              The digital marketing tactics listed can be leveraged to achieve
              the business objectives of increasing sales, engagement, and brand
              awareness.
            </p>
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

            <h3>SALES & MARKETING STRATEGY</h3>
            <ul>
              <li>Align sales and marketing strategy</li>
              <li>Market and competitor analysis</li>
            </ul>
            <p>
              The sales and marketing strategy group contains tactics that can
              help align the organisation&apos;s sales and marketing efforts and
              better understand the market and competition.
            </p>
            <div className="icons-container">
              <Image
                src={strategy}
                width={48}
                height={48}
                alt="strategy icon"
              />
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
              <li>Increase sales</li>
              <li>Engagement</li>
              <li>Brand awareness</li>
            </ul>
            <p>
              The overall business objectives group serves as a reminder of what
              the business is ultimately trying to achieve.
            </p>
            <div className="icons-container">
              <Image src={chart} width={48} height={48} alt="chart icon" />
              <Image
                src={piechart}
                width={48}
                height={48}
                alt="pie chart icon"
              />
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
          <Link href="/contact">
            <a className="cta">Get Started</a>
          </Link>
        </motion.div>
      </section>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default services;
