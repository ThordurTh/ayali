import React from "react";
import Image from "next/image";
import company_picture from "../assets/company_picture.webp";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function company({ setActiveLink, lang }) {
  const currentPage = 5;
  const activeLink = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Head>
        <title>{lang.company.title}</title>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Company"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="company-page-wrapper">
        <div className="company-hero">
          <h1>{lang.company.heading}</h1>
          <p>{lang.company.p1}</p>
          <p>{lang.company.p2}</p>
          <div className="company-image">
            <Image priority src={company_picture} alt="portrait of AYA LI" />
          </div>
        </div>
        <section className="block-content t-block-teal l-block-spacing">
          <div className="l-contained">
            <ul className="timeline-list">
              <li>
                <div className="content-company">
                  <h4>{lang.company.h1time}</h4>
                  <p>{lang.company.p1time}</p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>{lang.company.h2time}</h4>
                  <p>{lang.company.p2time}</p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>{lang.company.h3time}</h4>
                  <p>{lang.company.p3time}</p>
                </div>
              </li>
              <li>
                <div className="content-company">
                  <h4>{lang.company.h4time}</h4>
                  <p>{lang.company.p4time}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <FooterNav
        currentPage={currentPage}
        setActiveLink={setActiveLink}
      ></FooterNav>
    </>
  );
}

export default company;
