import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import en from "../locales/en";
import da from "../locales/da";

function ContactForm({ predefinedSubject, lang }) {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    subject: predefinedSubject || "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidInputs, setInvalidInputs] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    setCheckbox(checked);
    if (checked && invalidInputs.length > 0) {
    } else if (checked) {
      setErrorMessage("");
    }
  };

  const handleInvalid = (e) => {
    e.preventDefault();

    const test = Object.entries(inputValues)
      .filter(([_, value]) => value === "")
      .map(([name, _]) => name);

    const modifiedStrings = test.map((str) => {
      if (str === "firstName") {
        return "First Name";
      }
      if (str === "lastName") {
        return "Last Name";
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    });

    setInvalidInputs(test);

    if (test.length > 0) {
      setErrorMessage(
        `Please fill in the following: ${modifiedStrings.join(", ")}`
      );
    } else if (!checkbox) {
      setErrorMessage("Please check the checkbox");
    }
  };
  const form = useRef();
  const handleFormSubmit = (e) => {
    setInvalidInputs([]);

    emailjs
      .sendForm(
        "service_qw65rr9",
        "template_jy5zoa9",
        e.target,
        "kIxaz89gws325fceG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      action={`/success?name=${inputValues.firstName}`}
      onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="input_wrapper">
        {[
          { name: "firstName", label: lang.contact.firstName },
          { name: "lastName", label: lang.contact.lastName },
          { name: "email", label: lang.contact.email },
          { name: "company", label: lang.contact.company },
        ].map(({ name, label }) => (
          <div className="input_field" key={name}>
            <input
              name={name}
              type="text"
              onChange={handleInputChange}
              onInvalid={handleInvalid}
              required
            />
            <label className={invalidInputs.includes(name) ? "invalid" : ""}>
              {label}*
            </label>
          </div>
        ))}
        <div className="input_field">
          <input
            name="subject"
            type="text"
            value={inputValues.subject}
            onChange={handleInputChange}
            onInvalid={handleInvalid}
            required
          />
          <label className={invalidInputs.includes("subject") ? "invalid" : ""}>
            {lang.contact.subject}*
          </label>
        </div>
        <div className="text_field">
          <textarea
            name="message"
            onChange={handleInputChange}
            onInvalid={handleInvalid}
            required
          ></textarea>
          <label
            htmlFor="message"
            className={
              invalidInputs.includes("message") ? "invalid_textarea" : ""
            }
          >
            {lang.contact.message}*
          </label>
        </div>
        <span className="asterisk">{lang.contact.asterisk}*</span>
      </div>
      <div className="acknowledge">
        <input
          type="checkbox"
          onInvalid={handleInvalid}
          onChange={handleInputChange}
          required
        />
        <span>
          {lang.contact.checkbox}
          <a href="/privacyPolicy" target="_blank">
            {lang.contact.privacyPolicy}
          </a>
          *
        </span>
      </div>
      <button className="cta submit" type="submit">
        {lang.contact.submit}
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default ContactForm;
