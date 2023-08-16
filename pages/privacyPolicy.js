import Head from "next/head";
import FooterNav from "@components/FooterNav";

import Router, { useRouter } from "next/router";
import en from "../locales/en";
import da from "../locales/da";

export default function privacy_policy() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : da;

  return (
    <>
      <Head>
        <title>AYA LI</title>
        <meta name="author" content="Aya Li"></meta>
        <meta
          name="keywords"
          content="Consultancy, digital consultant, marketing, digital marketing consultant"
        ></meta>
        <meta name="description" content="AYA LI - Privacy Policy"></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>

      <section className="privacy_policy">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy outlines the manner in which we, as a digital
          marketing consultant, collect, use, store, and protect the personal
          information of our website visitors and clients. We are committed to
          maintaining the privacy and confidentiality of your information and
          ensuring compliance with applicable privacy laws and regulations. By
          accessing and using our website, you consent to the terms of this
          Privacy Policy.
        </p>
        <ol>
          <li>
            Information Collection and Use:
            <br />
            We may collect personal information, such as your name, email
            address, phone number, and any other information you voluntarily
            provide when you contact us through our website or subscribe to our
            newsletter. We use this information solely for the purpose of
            communicating with you, providing our services, and improving our
            website.
          </li>
          <li>
            Log Files:
            <br />
            Like many other websites, we may collect certain non-personal
            information automatically, such as your IP address, browser type,
            operating system, referring/exit pages, and date/time stamps. This
            information is used to analyze trends, administer the website, track
            users' movements, and gather demographic information for internal
            purposes.
          </li>
          <li>
            Cookies and Tracking Technologies: <br />
            We may use cookies and similar tracking technologies to enhance your
            experience on our website. These technologies help us understand
            your preferences, customize content, and gather information about
            your browsing activities. You can modify your browser settings to
            refuse cookies or notify you when they are being used.
          </li>
          <li>
            Data Sharing and Third Parties: <br />
            We do not sell, trade, or transfer your personal information to
            third parties without your explicit consent, except as required by
            law or as necessary to provide our services. However, we may engage
            trusted third-party service providers who assist us in operating our
            website or conducting our business. These service providers are
            bound by confidentiality agreements and are only permitted to use
            your information as necessary to provide their services to us.
          </li>
          <li>
            Data Security: <br />
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </li>
          <li>
            Links to External Websites: <br />
            Our website may contain links to external websites that are not
            operated by us. We are not responsible for the content or privacy
            practices of these third-party websites. We encourage you to review
            their privacy policies before providing any personal information.
          </li>
          <li>
            Children's Privacy: <br />
            Our website is not intended for individuals under the age of 13. We
            do not knowingly collect personal information from children. If we
            become aware that we have inadvertently collected personal
            information from a child under 13, we will take immediate steps to
            delete such information from our records.
          </li>
          <li>
            Changes to this Privacy Policy:
            <br /> We reserve the right to update or modify this Privacy Policy
            at any time. Any changes will be effective immediately upon posting
            the revised Privacy Policy on our website. We encourage you to
            review this page periodically to stay informed about our information
            practices.
          </li>
          <p>
            If you have any questions or concerns regarding our Privacy Policy,
            please contact us using the contact information provided on our
            website.
          </p>
        </ol>
      </section>

      <FooterNav></FooterNav>
    </>
  );
}
