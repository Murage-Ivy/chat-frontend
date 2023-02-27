import React from "react";
import MessageContainer from "../message/MessageContainer";
import MessageForm from "../messageForm/MessageForm";
import "./Chat.css";

function Chat() {
  return <div className="chats">
    <MessageContainer />
    <MessageForm />
  </div>;
}

export default Chat;
