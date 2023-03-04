import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import "./MessageContainer.css";
import ActionCable from "actioncable";

function MessageContainer() {
  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    const cable = ActionCable.createConsumer("ws://localhost:3000/cable", {
      headers: {
        Authorization: `${localStorage.getItem("user")}`,
      }
    });

    const handlers = {
      connected() {
        console.log("connected")
      },
      received(data) {
        console.log(data)
      },

      disconnected() {
        console.log("disconnected")
      }

    }

    cable.subscriptions.create({ channel: 'MessageRoomChannel', token: localStorage.getItem("user") }, handlers)

  }, [])
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
