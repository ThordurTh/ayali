import React from "react";
import Link from "next/link";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

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

      <div>
        <h1>PREVIOUS CASES</h1>
        <p>
          Text about previous cases lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </p>
      </div>
      <section>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
            />
          </svg>
          <span>Average revenue +164%</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
            />
          </svg>
          <span>Average return on ad spend 3.98</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
            />
          </svg>
          <span>+7 eCommerce brands</span>
        </div>
      </section>
      <section className="brands">
        <div className="brand">
          <div className="brand_title">
            <span>BRAND</span>
          </div>
          <div className="brand_text">
            <p>lorem ipsum</p>
          </div>
        </div>

        <div className="brand">
          <div className="brand_title">
            <span>BRAND 2</span>
          </div>
          <div className="brand_text">
            <p>lorem ipsum</p>
          </div>
        </div>

        <div className="brand">
          <div className="brand_title">
            <span>BRAND 3</span>
          </div>
          <div className="brand_text">
            <p>lorem ipsum</p>
          </div>
        </div>
      </section>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default cases;
