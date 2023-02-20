import { faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="img-login">
        <img src="" alt="" />
      </div>

      <form className="login-form">
        <h2>Welcome Back</h2>
        <input type="text" placeholder="username" />
        <FontAwesomeIcon icon={faPerson} className="login-icon" />
        <br />
        <input type="password" placeholder="password" />
        <FontAwesomeIcon icon={faLock} className="login-icon" />

        <button className="login-btn"> Login</button>

        <p> Don't Have an Account? Sign Up</p>
      </form>
    </div>
  );
}

export default Login;
