import { useState, useRef } from "react";
import brand1 from "../assets/BRAND1.png";
import brand2 from "../assets/BRAND2.png";
import brand3 from "../assets/BRAND3.png";
import Image from "next/image";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const tabs = [
    {
      id: 1,
      imgSrc: brand1,
      p1: "Brand 1, a prominent consumer goods company, required assistance in optimizing their search engine optimization and marketing strategies. The project aimed to enhance Brand 1's online visibility, drive organic traffic, and improve their overall marketing performance. Through strategic SEO tactics and targeted marketing initiatives, the objective was to elevate Brand 1's online presence and expand their market reach.",
      p2: "The main challenge faced in this project was the highly competitive nature of the consumer goods industry. Brand 1 needed to overcome the fierce competition and stand out in a saturated market. The task was to develop innovative and effective SEO and marketing strategies that would not only drive organic traffic but also differentiate Brand 1 from its competitors.",
      p3: "The project involved analyzing Brand 1's SEO and marketing efforts, conducting market research, and studying competitors. A tailored strategy was developed, focusing on keyword optimization, content creation, and targeted campaigns. Continuous monitoring and optimization ensured effectiveness throughout the project.",
    },
    {
      id: 2,
      imgSrc: brand2,
      p1: "Brand 2, a technology company, underwent a digital transformation to modernize their online presence and enhance customer experiences. The project focused on revamping their website, optimizing the e-commerce platform, and improving digital touchpoints. The goal was to establish a strong digital presence and solidify Brand 2's industry leadership.",
      p2: "The main challenge in this project was navigating the rapidly evolving landscape of the technology sector. Brand 2 needed to adapt to ever-changing customer expectations and stay ahead of emerging industry trends. The task was to implement a comprehensive digital transformation that aligned with Brand 2's vision while overcoming potential operational and technical hurdles.",
      p3: "The project involved assessing Brand 2's digital landscape and customer needs, followed by strategic planning and implementation of digital transformation initiatives. This included website revamp, e-commerce optimization, and digital touchpoint enhancements. Continuous monitoring and adjustments ensured a successful transformation for Brand 2.",
    },
    {
      id: 3,
      imgSrc: brand3,
      p1: "Brand 3, a retail company, pursued a digital innovation project to enhance their social media presence and optimize their e-commerce platform. The goal was to drive business growth and establish Brand 3 as a leader in the competitive market.",
      p2: "The primary challenge in this project was overcoming the competitive landscape of the retail industry. Brand 3 needed to differentiate themselves from competitors and stand out in the crowded digital space. The task was to develop effective social media strategies and optimize the e-commerce platform to attract and retain customers amidst fierce competition.",
      p3: "The project involved analyzing Brand 3's social media presence and e-commerce platform, followed by strategic planning and implementation to enhance both areas. The focus was on improving social media strategies and optimizing the e-commerce platform for maximum impact and growth.",
    },
  ];

  return (
    <>
      <div className="tabs-container">
        <div className="bloc-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={toggleState === tab.id ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(tab.id)}
            >
              <Image src={tab.imgSrc} alt={`brand${tab.id} icon`} />
            </div>
          ))}
        </div>

        <div className="content-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={
                toggleState === tab.id ? "content  active-content" : "content"
              }
            >
              <div className="individual-content">
                <h4>Project Overview</h4>
                <p>{tab.p1}</p>
              </div>

              <div className="individual-content">
                <h4>Challange</h4>
                <p>{tab.p2}</p>
              </div>
              <div className="individual-content">
                <h4>Process</h4>
                <p>{tab.p3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="accordion_cases">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <div
                id={tab.id}
                className="brand_logo"
                onClick={() => handleClick(tab.id)}
              >
                <Image src={tab.imgSrc} alt={`brand${tab.id} icon`} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  // className="bi bi-chevron-down"
                  className={
                    activeIndexes.includes(tab.id)
                      ? "bi bi-chevron-down arrow_flip"
                      : "bi bi-chevron-down"
                  }
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>

              <div
                className={
                  activeIndexes.includes(tab.id)
                    ? "case_description show"
                    : "case_description"
                }
                // className={
                //   toggleBrand === tab.id
                //     ? "case_description show"
                //     : "case_description"
                // }
              >
                <div className="individual-content">
                  <h4>Project Overview</h4>
                  <p>{tab.p1}</p>
                </div>

                <div className="individual-content">
                  <h4>Challange</h4>
                  <p>{tab.p2}</p>
                </div>
                <div className="individual-content">
                  <h4>Process</h4>
                  <p>{tab.p3}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Tabs;
