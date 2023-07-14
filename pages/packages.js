import React from "react";
import Link from "next/link";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import { motion } from "framer-motion";
import { useState } from "react";

function packages({ setActiveLink }) {
  const currentPage = 4;

  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>AYA LI - Packages</title>
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
        <h1>PACKAGES</h1>
        <p>
          Each package is designed to meet your specific needs and deliver
          optimal results. I understand that every business is unique, and
          that's why I offer a selection of packages that cater to various
          objectives and budgets.
        </p>
      </section>

      <section className="packages">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="free_call"
        >
          <h3>Book a free call</h3>
          <p>
            During our chat, we'll take the time to identify the digital
            marketing needs of your business. We'll evaluate the potential of
            working together and how that can help you reach your business
            goals. This chat is free and there's absolutely no obligation - so
            you have nothing to lose!
          </p>
          <p>The intro chat typically takes around 45 minutes.</p>

          <div className="packages-button-container">
            <Link href="../contact?value=package1">
              <a onClick={() => activeLink()} className="cta">
                START NOW
              </a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <h3>Fixed Fee Solution</h3>
          <span></span>
          <ul>
            <li>A payment solution charging a fixed fee per month</li>
            <li>Weekly reporting and optimization</li>
            <li>Monthly strategy meetings</li>
            <li>No binding period</li>
            <li>Running month plus 1 month of termination</li>
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
          <h3>Hybrid Fee Solution</h3>
          <span></span>
          <ul>
            <li>
              A payment solution charging a fixed fee plus a performance fee of
              x percentage of revenue per month
            </li>
            <li>Weekly reporting and optimization</li>
            <li>Monthly strategy meetings</li>
            <li>3 months of binding period</li>
            <li>Running month plus 1 month of termination</li>
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
          <h3>Performance Fee Solution</h3>
          <span></span>
          <ul>
            <li>
              A payment solution charging a performance fee of x percentage of
              revenue per month
            </li>
            <li>Weekly reporting and optimization</li>
            <li>Monthly strategy meetings</li>
            <li>6 months of binding period</li>
            <li>Running month plus 1 month of termination</li>
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
