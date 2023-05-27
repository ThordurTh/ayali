import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";
import FooterNav from "@components/FooterNav";

function company() {
  const currentPage = 5;
  return (
    <>
      <Head>
        <title>AYA LI - Company</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
        <meta
          name="description"
          content="AYA LI - Digitial Marketing Consultant - Company"
        ></meta>
        <meta name="theme-color" content="#c7f3e9" />
      </Head>
      <div className="company-page-wrapper">
      <div className="company-hero">
        <h1>ABOUT ME</h1>
        <p>The internet is becoming the town square for the global village of tomorrow</p>
          <p>Bill Gates</p>
        <p>About me bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus.</p>
        <div className="company-image">
        <Image src={portrait} alt="portrait of AYA LI" />
      </div>
      </div>
      <section className="block-content t-block-teal l-block-spacing">
					<div className="l-contained">
						<ul className="timeline-list">
							<li>
                  <div className="content-company">
								<h3>The beginning</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. 
								</p>
                </div>
							</li>
							<li>
                  <div className="content-company">
								<h3>First Client</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. 
								</p>
                </div>
							</li>
							<li>
                  <div className="content-company">
								<h3>Current status</h3>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. 
								</p>
                </div>
							</li>
              <li>
                  <div className="content-company">
								<h3>The future</h3>
								<p>
								Planning to expand, going to be very pog 
								</p>
                </div>
							</li>
						</ul>
					</div>
				</section>
        </div>
      <FooterNav currentPage={currentPage}></FooterNav>
    </>
  );
}

export default company;
