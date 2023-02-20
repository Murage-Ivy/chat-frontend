import { faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "./loginSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoggedUser({ ...loggedUser, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(loggedUser, navigate));
  }
  return (
    <div className="login-group">
      <div className="img-login">
        <img src="../assets/images/Sign-in-amico.svg" alt="loginpicture" />
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="welcome-message">Welcome Back</h2>

        <div className=" login-inputs">
          <FontAwesomeIcon icon={faPerson} className="login-icon" />
          <input
            type="text"
            placeholder="username"
            value={loggedUser.username}
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="login-inputs">
          <FontAwesomeIcon icon={faLock} className="login-icon" />
          <input
            type="password"
            placeholder="password"
            value={loggedUser.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <button className="login-btn"> Login</button>

        <p className="signup-option">
          Don't Have an Account? <span id="sign-up">Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
