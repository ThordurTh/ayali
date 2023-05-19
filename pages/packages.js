import React from "react";
import Link from "next/link";
import Head from "next/head";

function packages() {
  return (
    <>
      <Head>
        <title>Aya Li - Packages</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="Aya Li - Digitial Marketing Consultant - Packages"
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

      <nav className="footer_nav">
        <Link href="/cases">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            CASES
          </a>
        </Link>
        <Link href="/company">
          <a>
            COMPANY
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </Link>
      </nav>
    </>
  );
}

export default packages;
