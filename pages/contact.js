import React from "react";
import Image from "next/image";
import contactPhoto from "../assets/contact_photo.webp";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import ContactForm from "@components/ContactForm";
import { useRouter } from "next/router";

function contact({setActiveLink}) {
  const currentPage = 6;
  const activeLink = (path) => {
    setActiveLink(path);
  };

  const router = useRouter();
  const { value } = router.query;

  let predefinedSubject = "";

  if (value === "package1") {
    predefinedSubject = "Free 30 minute call";
  } else if (value === "package2") {
    predefinedSubject = "Short-term Project";
  } else if (value === "package3") {
    predefinedSubject = "Long-term Project";
  }

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
              Maximize your online potential and achieve business success with
              expert guidance. As a dedicated digital marketing consultant, I am
              here to empower you with tailored strategies.
            </p>
            <p>
              Take advantage of the quick discovery call, where I will assess
              your unique needs and provide tailored solutions. Simply fill out
              the form below to get started on your digital marketing journey. I
              look forward to collaborating with you and helping your business
              thrive in the digital landscape!
            </p>
          </div>
          <ContactForm predefinedSubject={predefinedSubject} />
        </div>
        <div className="contact_image">
          <Image
            src={contactPhoto}
            alt="portrait of AYA LI"
            width={600}
            height={780}
          />
        </div>
      </div>
      <FooterNav currentPage={currentPage} setActiveLink={setActiveLink}></FooterNav>
    </>
  );
}

export default contact;
