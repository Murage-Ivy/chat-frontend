import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../friendForm/friendSlice";
import "./Contact.css";

function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.friends.friends);
  const status = useSelector((state) => state.friends.status);
  const errors = useSelector((state) => state.friends.errors);

  useEffect(() => {
    dispatch(getFriends(localStorage.getItem("user")));
  });

  return <div className="contact-list">Contact</div>;
}

export default Contact;
