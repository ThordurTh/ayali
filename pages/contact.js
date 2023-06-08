import React from "react";
import Image from "next/image";
import contactPhoto from "../assets/contact_photo.webp";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import ContactForm from "@components/ContactForm";
import { useRouter } from "next/router";
import en from "../locales/en";
import da from "../locales/da";

function contact({ setActiveLink, lang }) {
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
            <h1>{lang.contact.heading}</h1>
            <p>{lang.contact.p1}</p>
            <p>{lang.contact.p2}</p>
          </div>
          <ContactForm predefinedSubject={predefinedSubject} lang={lang} />
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
      <FooterNav
        currentPage={currentPage}
        setActiveLink={setActiveLink}
      ></FooterNav>
    </>
  );
}

export default contact;
