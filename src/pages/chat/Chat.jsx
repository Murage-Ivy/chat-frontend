import React from "react";
import MessageForm from "../messageForm/MessageForm";
import SearchForm from "../searchForm/SearchForm";
import "./Chat.css";

function Chat() {
  return <div className="chats">Chats
    <MessageForm />
  </div>;
}

export default Chat;
