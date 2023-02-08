import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import { addUser } from "./UserSlice";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: "",
  });
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors);
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (event.target.name === "image") {
      setUser({ ...user, image: event.target.files[0] });
    } else {
      setUser({ ...user, [name]: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.image.files);
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirmation", user.password_confirmation);
    formData.append("image", user.image);
    dispatch(addUser(formData));
    console.log(...formData);
  }

  function customErrorDisplay() {
    if (user.password.length > 0 && user.password.length < 6) {
      return <span>{errors[0]?.password[0]}</span>;
    }
  }

  return (
    <div className="signup-container">
      <div className="inner-container">
        <div className="img-card">
          <img
            src="../assets/images/undraw_share_opinion_re_4qk7.svg"
            alt="chat"
          />
        </div>
        <form className="sign-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="."
              autoComplete="username"
              value={user.username}
              onChange={handleChange}
            />
            <label className="floating-label">Username</label>
            <br />
            <span className="error">{errors[0]?.username}</span>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="."
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
            />
            <label className="floating-label">Email</label>
            <br />

            <span className="error">{errors[0]?.email}</span>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="."
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <label className="floating-label">Password</label>
            <br />
            {/* <span className="error">{errors[0]?.password[0]}</span> */}
            {customErrorDisplay()}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password_confirmation"
              placeholder="."
              value={user.password_confirmation}
              autoComplete="current-password"
              onChange={handleChange}
            />
            <label className="floating-label">Password Confirmation</label>
            <br />
            {/* <span className="error">{errors[0]?.password_confirmation[0]}</span> */}
            {customErrorDisplay()}
          </div>

          <input
            type="file"
            name="image"
            id="image"
            size="60"
            onChange={handleChange}
          />
          <button className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
