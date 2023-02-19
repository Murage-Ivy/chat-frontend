import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-input">
      <label className="label-for-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input placeholder="Search in Chats" type="text" />
      </label>
    </div>
  );
}

export default SearchForm;
