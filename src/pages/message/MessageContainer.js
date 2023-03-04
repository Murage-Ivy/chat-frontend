import React from "react";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import "./MessageContainer.css";

function MessageContainer() {

  return (
    <div className="message-container">
      <div className="top-header">
        <h2>Chats</h2>
        <br />
        <SearchForm />
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default MessageContainer;
