import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPerson, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  }, [dispatch]);

  const contactList = contacts?.map((contact) => (
    <li key={contact.id}>
      <FontAwesomeIcon icon={faUser} className="user-icon" />
      <div >{contact.name}</div>
      <div >{contact.email}</div>
      <FontAwesomeIcon icon={faMessage} className="message-icon" />
      <FontAwesomeIcon icon={faTrash} className="message-icon" />
    </li>

  ));

  return (
    <div className="contact-list">
      <h1 className="contact-list-header">Contacts</h1>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <ul>
        {contactList}
      </ul>
    </div>
  );
}

export default Contact;
