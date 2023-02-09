import React from "react";
import { useSelector } from "react-redux";

function MessageContainer() {
  const user = useSelector(state => state.user.user);
  console.log(user);
  return (
    <div className="message-container">
      <div className="top-header">
        <h2>Chats</h2>
      </div>
    </div>
  );
}

export default MessageContainer;
