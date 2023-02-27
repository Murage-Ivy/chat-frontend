import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import {
  faAdd,
  faArrowRightFromBracket,
  faMessage,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import "./SideBar.css";

function SideBar({ children }) {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="item">
          <FontAwesomeIcon icon={faPerson} className="side-icon" />
          <span>Account</span>
        </div>

        <Link to="/friendform">
          <div className="item">
            <FontAwesomeIcon
              icon={faAdd}
              className="side-icon"
              id="add-friend"
            />
            <span>Add Friend</span>
          </div>
        </Link>

        <Link to="/contacts">
          <div className="item">
            <FontAwesomeIcon icon={faContactBook} className="side-icon" />
            <span>Contacts</span>
          </div>
        </Link>

        <Link to="/chats">
          <div className="item">
            <FontAwesomeIcon icon={faMessage} className="side-icon" />
            <span>Chats</span>
          </div>
        </Link>


        <div className="item">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="side-icon"
          />
          <span>LOGOUT</span>
        </div>
      </div>
      <MainPage children={children} />
    </div>
  );
}

export default SideBar;
