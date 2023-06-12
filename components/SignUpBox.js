import React from "react";

function SignUpBox() {
  return (
    <div className="blog-signup-box">
      <h4>Stay In the Loop!</h4>
      <p>Subscribe to the newsletter to get updates for every blogpost</p>
      <div>
        <form name="sign-up">
          <input type="email" name="email" placeholder="Email" />
          <button className="cta submit" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpBox;
