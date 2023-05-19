import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>AYA LI - Contact</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Contact"
        ></meta>
      </Head>
      <div>
        <h1>Contact</h1>
        <p>
          Pricing of packages blabla lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum 30 MINUTE VIDEO CALLlorem ipsum Pricing of packages blabla lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Pricing of
          packages blabla lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
      </div>
      <form>
        <div className="input_wrapper">
          <div className="input_field">
            <input name="firstName" type="text" required />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input_field">
            <input name="lastName" type="text" required />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input_field">
            <input name="company" type="text" required />
            <label htmlFor="company">Company Name</label>
          </div>
          <div className="input_field">
            <input name="email" type="text" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input_field">
            <textarea name="message"></textarea>
            <label htmlFor="email">Description</label>
          </div>
        </div>
        <div className="acknowledge">
          <input type="checkbox" required />
          <span>
            By sending this form, I confirm that I have read and acknowledged
            the privacy policy.
          </span>
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
      <Image src={portrait} alt="image of aya" />

      <nav className="footer_nav">
        <Link href="/company">
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
            COMPANY
          </a>
        </Link>
      </nav>
    </>
  );
}

export default contact;
