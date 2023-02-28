import React, { useContext } from "react";
import { messageContext } from "../message/MessageContext";
import "./Card.css";

function Card() {
  const { contacts } = useContext(messageContext)

  const contactList = contacts?.map((contact) => <div key={contact.id} className="user-card">
    <img
      src={contact.image} alt="person"
    />
    <div className="short-info">
      <h4>{contact.username}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
    </div>
  </div>)
  return (
    <>
      {contactList}
    </>
  );
}

export default Card;
