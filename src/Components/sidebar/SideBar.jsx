import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import {
  faAdd,
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
        <FontAwesomeIcon icon={faPerson} className="side-icon" />
        <span>Account</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faAdd} className="side-icon"  id ="add-friend"/>
        <span>Add Friend</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faContactBook} className="side-icon" />
        <span>Contacts</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faMessage} className="side-icon" />
        <span>Chats</span>
      </div>

      <div className="item">
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="side-icon" />
        <span>LOGOUT</span>
      </div>
    </div>
  );
}

export default SideBar;
