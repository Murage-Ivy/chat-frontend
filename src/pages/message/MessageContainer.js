import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import "./MessageContainer.css";

function MessageContainer() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
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
