import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";

function company() {
  return (
    <>
      <Head>
        <title>Aya Li - Company</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="Aya Li - Digitial Marketing Consultant - Company"
        ></meta>
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
      <nav className="footer_nav">
        <Link href="/packages">
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
            PACKAGES
          </a>
        </Link>
        <Link href="/contact">
          <a>
            CONTACT
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

export default company;
