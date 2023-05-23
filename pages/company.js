import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function company() {
  const currentPage = 5;
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

      <div>
        <h1>ABOUT ME</h1>
        <p>Quote from microsoft man</p>
        <p>About me bla bla</p>
      </div>
      <section className="timeline">
        <div>
          cirlce <br /> lorem blabla lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="line"></div>
        <div>
          cirlce <br /> lorem blabla lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="line"></div>
        <div>
          cirlce <br /> lorem blabla lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <Image src={portrait} alt="image of aya" />
      </section>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default company;
