import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="inner-container">
        <div className="img-card">
          <img
            src="../assets/images/undraw_share_opinion_re_4qk7.svg"
            alt="chat"
          />
        </div>
        <form className="sign-up">
          <div className="form-group">
            <input type="text" name="username" />
            <label className="floating-label">Name</label>
          </div>
          <div className="form-group">
            <input type="email" name="email" />
            <label className="floating-label">Email</label>
          </div>

          <div className="form-group">
            <input type="password" name="passowrd" />
            <label className="floating-label">Password</label>
          </div>

          <div className="form-group">
            <input type="password" name="password-confirmation" />
            <label className="floating-label">Password Confirmation</label>
          </div>

          <input type="file" placeholder="Image" name="image" id="image" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
