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
      </Head>
      <div>
        <h1>PACKAGES</h1>
        <p>
          Pricing of packages blabla lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </p>
      </div>

      <section>
        <div>
          <h2>DISCOVERY CALL</h2>
          <p>A quick marketing audit</p>
          <span>0DKK</span>
          <ul>
            <li>30 minute video call via zoom</li>
            <li>Free digital marketing audit</li>
            <li>
              Learn if you are making any crucial marketing mistakes right now
            </li>
            <li>Answering your questions</li>
          </ul>
          <Link href="../contact">START NOW</Link>
        </div>
        <div>
          <h2>SHORT-TERM PROJECT</h2>
          <p>Consulting services</p>
          <span>500DKK / h</span>
          <ul>
            <li>Digital marketing audits</li>
            <li>Marketing consulting services</li>
            <li>Marketing trainings for teams</li>
            <li>Regular marketing efficiency checks</li>
            <li>Other short-term projects</li>
          </ul>
          <Link href="../contact">START NOW</Link>
        </div>
        <div>
          <h2>LONG-TERM PROJECT</h2>
          <p>Consulting services</p>
          <span>From 2300DKK / month</span>
          <ul>
            <li>Meta (Facebook) advertising</li>
            <li>Google Ads (Search) advertising</li>
            <li>Google Display Network (GDN) advertising</li>
            <li>Youtube advertising</li>
            <li>Snapchat advertising</li>
            <li>Tik Tok advertising</li>
            <li>Marketing reports & recommendations</li>
          </ul>
          <Link href="../contact">START NOW</Link>
        </div>
      </section>

      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default packages;
