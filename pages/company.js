import React from "react";
import Image from "next/image";
import portrait from "../assets/portrait.webp";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function company({setActiveLink}) {
  const currentPage = 5;
  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>AYA LI - Company</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Company"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="company-page-wrapper">
        <div className="company-hero">
          <h1>ABOUT ME</h1>
          <p>
            I specialize in scaling eCommerce businesses with a holistic, and
            data-driven approach. Through years of experience in digital
            marketing and with a background in business administration,
            -psychology, and sales, I help businesses stand out from the market
            by focusing on strategy and branding.{" "}
          </p>
          <p>
            The result? A strong digital presence and long-term increased sales.
          </p>
          <div className="company-image">
            <Image priority src={portrait} alt="portrait of AYA LI" />
          </div>
        </div>
        <section className="block-content t-block-teal l-block-spacing">
          <div className="l-contained">
            <ul className="timeline-list">
              <li>
                <div className="content-company">
                  <h4>The beginning - December 2021</h4>
                  <p>
                    Studying Business Psychology ignited my passion for
                    marketing. I ventured into the world of digital marketing,
                    launching my own consultancy to help businesses grow. With
                    innovative strategies and a strong foundation, I embarked on
                    an exciting journey at the beginning of my career.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>First Client - January 2022</h4>
                  <p>
                    My inaugural client, a prominent marketing agency, offered
                    me a freelance position, igniting my journey. Working with
                    eight e-commerce web shops, I gained hands-on experience in
                    paid social media advertising, expanding later into Google
                    ads and e-mail marketing.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>Current standing</h4>
                  <p>
                    Presently, my portfolio has expanded to encompass three
                    additional clients, in addition to the marketing agency.
                    Moreover, I have cultivated partnerships with an impressive
                    roster of 12-13 e-commerce businesses, boosting their
                    digital marketing efforts across various platforms,
                    encompassing Google ads, e-mail marketing, and paid
                    advertisements in social media realms.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>The future</h4>
                  <p>
                    For the future, I envision expanding my company by hiring
                    more digital consultants and onboarding new clients. This
                    growth-oriented approach aims to further enhance our
                    presence in the digital marketing industry.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <FooterNav currentPage={currentPage} setActiveLink={setActiveLink}></FooterNav>
    </>
  );
}

export default company;
