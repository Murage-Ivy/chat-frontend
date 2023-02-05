import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="img-card">
        <img
          src="../assets/images/undraw_share_opinion_re_4qk7.svg"
          alt="chat"
        />
      </div>
      <form className="sign-up">
        <input type="text" placeholder="Name" name="username" />

        <input type="email" placeholder="Email" name="email" />

        <input type="password" placeholder="Password" name="passowrd" />

        <input
          type="password"
          placeholder="Password Confirmation"
          name="password-confirmation"
        />

        <input type="file" placeholder="Image" name="image" />
      </form>
    </div>
  );
}

export default Signup;
