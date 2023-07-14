import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function SignUpBox({ setIsVisible }) {
  const [focusValid, setFocusValid] = useState(false);

  const handleInput = (e) => {
    if (e.target.value !== "") {
      setFocusValid(true);
    } else {
      setFocusValid(false);
    }
  };

  const form = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    emailjs
      .sendForm(
        "service_f9bacna",
        "template_354n67m",
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
    e.target.reset();
    setFocusValid(false);
  };

  return (
    <div className="blog-signup-box">
      <h4>Stay In the Loop!</h4>
      <p>Subscribe to the newsletter to get updates for every blogpost</p>

      <form name="sign-up" method="post" onSubmit={handleFormSubmit} ref={form}>
        <div>
          <input onChange={handleInput} type="email" name="email" required />
          <label className={focusValid ? "focus_valid" : ""}>EMAIL</label>
        </div>
        <button className="cta submit" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SignUpBox;
