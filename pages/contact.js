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
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="contact_wrapper">
        <div className="form_wrapper">
          <div className="contact_about">
            <h1>Contact</h1>
            <p>
            Maximize your online potential and achieve business success with expert guidance.
            As a dedicated digital marketing consultant, I am here to empower you with tailored strategies. 
            </p>
            <p>Take advantage of the quick discovery call, where I will assess your unique needs and provide tailored solutions. Simply fill out the form below to get started on your digital marketing journey. I look forward to collaborating with you and helping your business thrive in the digital landscape!
            </p>
          </div>
          <form
            name="contact"
            // action="contact"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
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
                <input name="email" type="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="text_field">
                <textarea name="message" required></textarea>
                <label htmlFor="email">Description</label>
              </div>
            </div>
            <div className="acknowledge">
              <input type="checkbox" required />
              <span>
                By sending this form, I confirm that I have read and
                acknowledged the privacy policy.
              </span>
            </div>
            <button className="cta submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="contact_image">
          <Image src={portrait} alt="portrait of AYA LI" />
        </div>
      </div>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default contact;
