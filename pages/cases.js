import React from "react";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import Tabs from "@components/Tabs"
import chart from "../assets/chart-up.png"
import money from "../assets/money.png"
import brands from "../assets/brands.png"
import Image from "next/image";

function cases() {
  const currentPage = 3;
  return (
    <>
      <Head>
        <title>AYA LI - Cases</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Cases"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="previous-cases-hero">
        <div className="previous-cases-text">
        <h1>PREVIOUS CASES</h1>
        <p>
          Text about previous cases lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </p>
        </div>
        <div className="previous-cases-graphics">
          <div><Image src={money} width={48} height={48} alt="money icon" />
          <p>Avg. revenue +164% </p>
          </div>
          <div>
          <p>Avg. ROAS 3.98</p>
            <Image src={chart} width={48} height={48} alt="chart icon" />
            </div>
          <div>
            <Image src={brands} width={48} height={48} alt="brands icon" />
            <p>+7 eCommerce brands</p>
            </div>
        </div>
      </div>
      <Tabs/>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default cases;
