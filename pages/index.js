import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";

export default function index() {
  return (
    <>
      <Head>
        <title>AYA LI</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant"
        ></meta>
      </Head>
      <div className="hero_image">
        <Image src={portrait} alt="portrait of AYA LI" />
      </div>
      <div className="hero">
        <h1>AYA LI</h1>
        <h2>
          DIGITAL MARKETING <br />
          CONSULTANT
        </h2>
        <p>Start your journey of exponential cheese here.</p>
        <a className="cta" href="contact.html">
          Get started
        </a>
      </div>
    </>
  );
}
