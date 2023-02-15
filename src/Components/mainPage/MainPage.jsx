import React from "react";
import Chat from "../chat/Chat";
import MessageContainer from "../message/MessageContainer";
import SideBar from "../sidebar/SideBar";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <SideBar />
      <MessageContainer />
      <Chat />
    </div>
  );
}

export default MainPage;
