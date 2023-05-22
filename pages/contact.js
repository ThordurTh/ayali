import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function contact() {
  const currentPage = 6;

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

      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default contact;
