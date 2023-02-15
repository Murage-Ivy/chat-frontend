import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faMessage,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="item">
        <FontAwesomeIcon icon={faPerson} />
        <span>Account</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faContactBook} />
        <span>Contacts</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faMessage} />
        <span>Chats</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span>LOGOUT</span>
      </div>
    </div>
  );
}

export default SideBar;
