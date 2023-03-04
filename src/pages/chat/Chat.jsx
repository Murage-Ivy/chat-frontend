import React from "react";
import ChatRoom from "../chatRoom/ChatRoom";
import MessageContainer from "../message/MessageContainer";
import "./Chat.css";

function Chat() {
  return <div className="chats">
    <MessageContainer />
    <ChatRoom />
  </div>;
}

export default Chat;
