import React from "react";
import Link from "next/link";
import Image from "next/image";
import portrait from "../assets/portrait.png";
import Head from "next/head";
import FooterNav from "@components/FooterNav";
import ContactForm from "@components/ContactForm";
import { useState } from "react";

function contact() {
  const currentPage = 6;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [nameValid, setNameValid] = useState(false);
  // const [emailValid, setEmailValid] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // CHANGE
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // BLUR
  const handleNameBlur = () => {
    setNameFocus(name !== "");
  };

  // const handleEmailBlur = () => {
  //   setEmailFocus(email !== "");
  // };

  // // FOCUS
  // const handleNameFocus = () => {
  //   setNameFocus(true);
  // };
  // const handleEmailFocus = () => {
  //   setEmailFocus(true);
  // };

  // SUBMIT
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setEmailFocus(email.includes("@"));

  //   if (nameValid && emailValid) {
  //     // Submit the form or perform other actions
  //     console.log("Form submitted");
  //   } else {
  //     // Display error message or perform other actions
  //     console.log("Please fill in the required fields");
  //   }
  // };

  // const [inputValues, setInputValues] = useState({
  //   firstName: "",
  //   lastName: "",
  //   company: "",
  //   email: "",
  //   message: "",
  // });
  // const [invalidInputs, setInvalidInputs] = useState([]);
  // const [isValid, setIsValid] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputValues((prevInputValues) => ({
  //     ...prevInputValues,
  //     [name]: value,
  //   }));
  //   setIsValid(event.target.value.length > 0);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   const invalidInputs = Object.entries(inputValues)
  //     .filter(([_, value]) => value === "")
  //     .map(([name, _]) => name);

  //   if (invalidInputs.length > 0) {
  //     setInvalidInputs(invalidInputs);
  //     return; // Stop form submission
  //   }

  //   // Reset invalidInputs state if all inputs are valid
  //   setInvalidInputs([]);

  //   // Proceed with form submission
  //   // ...
  // };

  // const handleFocus = (inputId) => {
  //   setIsFocused(inputId);
  // };

  // const handleBlur = (event) => {
  //   setIsFocused(false);
  // };
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleInvalid = (e) => {
  //   e.preventDefault();
  //   setErrorMessage("Please enter a value. wow");
  // };

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
              Pricing of packages blabla lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum 30 MINUTE VIDEO CALLlorem ipsum Pricing of packages
              blabla lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              Pricing of packages blabla lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum
            </p>
          </div>

          <ContactForm />

          {/* <form
            name="contact"
            // action="contact"
            method="post"
            data-netlify="true"
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input_wrapper">
              <div className="input_field">
                <input
                  name="firstName"
                  type="text"
                  className={
                    invalidInputs.includes("firstName") ? "invalid-input" : ""
                  }
                  // className={`input-field ${isFocused ? "focused" : ""} ${
                  //   invalidInputs.includes("firstName") ? "invalid-input" : ""
                  // }`}
                  value={inputValues.firstName}
                  onFocus={() => handleFocus("firstName")}
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="firstName"
                  // className={isFocused ? "focused" : ""}
                  className={`${isFocused === "firstName" ? "focused" : ""} ${
                    isValid ? "focused" : ""
                  }`}
                >
                  First Name
                </label>
              </div>
              <div className="input_field">
                <input
                  name="lastName"
                  type="text"
                  className={
                    invalidInputs.includes("lastName") ? "invalid-input" : ""
                  }
                  value={inputValues.lastName}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("lastName")}
                />
                <label
                  htmlFor="lastName"
                  className={`${isFocused === "lastName" ? "focused" : ""} ${
                    isValid ? "focused" : ""
                  }`}
                >
                  Last Name
                </label>
              </div>
              <div className="input_field">
                <input
                  name="company"
                  type="text"
                  className={
                    invalidInputs.includes("company") ? "invalid-input" : ""
                  }
                  value={inputValues.company}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("company")}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="company"
                  className={`${isFocused === "company" ? "focused" : ""} ${
                    isValid ? "focused" : ""
                  }`}
                >
                  Company Name
                </label>
              </div>
              <div className="input_field">
                <input
                  name="email"
                  type="email"
                  className={
                    invalidInputs.includes("email") ? "invalid-input" : ""
                  }
                  value={inputValues.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="email"
                  className={`${isFocused === "email" ? "focused" : ""} ${
                    isValid ? "focused" : ""
                  }`}
                >
                  Email
                </label>
              </div>
              <div className="text_field">
                <textarea
                  name="message"
                  className={
                    invalidInputs.includes("message") ? "invalid-input" : ""
                  }
                  value={inputValues.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                ></textarea>
                <label
                  htmlFor="message"
                  className={`${isFocused === "message" ? "focused" : ""} ${
                    isValid ? "focused" : ""
                  }`}
                >
                  Description
                </label>
              </div>
            </div>
            <div className="acknowledge">
              <input type="checkbox" />
              <span>
                By sending this form, I confirm that I have read and
                acknowledged the privacy policy.
              </span>
            </div>
            {invalidInputs.length > 0 && (
              <p className="error">
                Please enter a value for the following input(s):{" "}
                {invalidInputs.join(", ")}
              </p>
            )}
            <button className="cta submit" type="submit">
              SUBMIT
            </button>
            </form> */}
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
