import { faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "./loginSlice";

function Login({ setVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const errors = useSelector((state) => state.loggedUser.errors);
  const status = useSelector((state) => state.loggedUser.status);

  console.log(errors);

  const [loggedUser, setLoggedUser] = useState({
    username: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!errors) {
      setIsVisible(false);
    }
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [setIsVisible, errors]);
  function handleErrors() {
    if (errors) {
      return errors?.map((error, index) => (
        <h3 className="login-error" key={index}>
          {error}
        </h3>
      ));
    } else {
      return null;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoggedUser({ ...loggedUser, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(loggedUser, navigate, setVisible));
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

        {isVisible ? handleErrors() : null}

        <button className="login-btn">
          {status === "loading" ? "Logging..." : "Login"}
        </button>

        <p className="signup-option">
          Don't Have an Account?
          <Link to="/signup">
            <span id="sign-up">Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
