import { faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-group">
      <div className="img-login">
        <img src="../assets/images/Sign-in-amico.svg" alt="loginpicture" />
      </div>

      <form className="login-form">
        <h2 className="welcome-message">Welcome Back</h2>

        <div className=" login-inputs">
          <FontAwesomeIcon icon={faPerson} className="login-icon" />
          <input type="text" placeholder="username" />
        </div>

        <div className="login-inputs">
          <FontAwesomeIcon icon={faLock} className="login-icon" />
          <input type="password" placeholder="password" />
        </div>

        <button className="login-btn"> Login</button>

        <p className="signup-option">
          {" "}
          Don't Have an Account? <span id="sign-up">Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
