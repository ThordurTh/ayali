import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";

export default function index() {
  return (
    <>
      <Head>
        <title>Aya Li</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="Aya Li - Digitial Marketing Consultant"
        ></meta>
      </Head>
      <div className="hero_image">
        <Image src={portrait} alt="portrait of Aya Li" />
      </div>
      <div className="hero">
        <h1>Aya Li</h1>
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
