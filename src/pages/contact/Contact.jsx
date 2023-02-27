import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, removeFriend } from "../friendForm/friendSlice";
import "./Contact.css";

function Contact() {
  const token = localStorage.getItem("user")
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.friends.friends);
  const status = useSelector((state) => state.friends.status);
  const errors = useSelector((state) => state.friends.errors);

  useEffect(() => {
    dispatch(getFriends(token));
  }, [dispatch, token]);


  const onRemoveFriend = (friendId) => {
    dispatch(removeFriend(friendId, token))
  }

  const contactList = contacts?.map((contact) => (
    <li key={contact.id}>
      <FontAwesomeIcon icon={faUser} className="user-icon" />
      <div >{contact.name}</div>
      <div >{contact.email}</div>
      <FontAwesomeIcon icon={faMessage} className="message-icon" />
      <FontAwesomeIcon icon={faTrash} className="message-icon" onClick={() => onRemoveFriend(contact.id)} />
    </li>

  ));

  return (
    <div className="contact-list">
      <h1 className="contact-list-header">Contacts</h1>
      <div className="search">
        <input type="text" placeholder="Search" className="contact-search" />
      </div>
      {status === "loading" ? <h2>Loading...</h2> : null}
      <ul>

        {contactList}
      </ul>
    </div>
  );
}

export default Contact;
