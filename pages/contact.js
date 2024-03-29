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
  const currentPage = 5;
  const activeLink = (path) => {
    setActiveLink(path);
  };

  const router = useRouter();
  const { value } = router.query;

  let predefinedSubject = "";

  if (value === "package1") {
    predefinedSubject = "Free call";
  } else if (value === "package2") {
    predefinedSubject = "Fixed Fee Solution";
  } else if (value === "package3") {
    predefinedSubject = "Hybrid Fee Solution";
  } else if (value === "package3") {
    predefinedSubject = "Performance Fee Solution";
  }

  return (
    <>
      <Head>
        <title>{lang.contact.title}</title>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
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
          <Image src={contactPhoto} alt="portrait of AYA LI" />
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
