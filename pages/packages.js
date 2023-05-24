import React from "react";
import Link from "next/link";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function packages() {
  const currentPage = 4;
  return (
    <>
      <Head>
        <title>AYA LI - Packages</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Packages"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
  <section className="packages-hero">
        <h1>PACKAGES</h1>
        <p>
        Elevate your online presence with our tailored digital marketing packages. Achieve your business goals with comprehensive solutions and measurable results.
        </p>
      </section>
      <section className="packages">
        <div>
          <h3>BOOK A FREE CALL</h3>
          <p>A quick discovery call</p>
          <span>0DKK</span>
          <ul>
            <li>30 minute video call</li>
            <li>Free digital marketing audit</li>
            <li>
            Answering all your questions
            </li>
            <li>Offering you insights regarding your business</li>
          </ul>
          <div className="packages-button-container">
          <Link href="../contact"><a className="cta">START NOW</a></Link>
          </div>
        </div>
        <div className="middle-package">
          <h3>SHORT-TERM PROJECT</h3>
          <p>Consulting services</p>
          <span>700DKK / h</span>
          <ul>
            <li>Strategic planning</li>
            <li>Campaign setup and management</li>
            <li>Content creation</li>
            <li>Performance tracking and optimization</li>
            <li>Reporting and analysis</li>
          </ul>
          <div className="packages-button-container">
          <Link href="../contact"><a className="cta">START NOW</a></Link>
          </div>
        </div>
        <div>
          <h3>LONG-TERM PROJECT</h3>
          <p>Enhanced Consulting services</p>
          <span>Starting 2000DKK / month</span>
          <ul>
            <li>Comprehensive strategy development</li>
            <li>Ongoing campaign management and optimization</li>
            <li>Continuous content creation and optimization</li>
            <li>Advanced performance tracking and analysis</li>
            <li>Regular reporting and progress updates</li>
            <li>Advertising campaigns</li>
          </ul>
          <div className="packages-button-container">
          <Link href="../contact"><a className="cta">START NOW</a></Link>
          </div>
        </div>
      </section>

      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default packages;
