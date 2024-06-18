import React from "react";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComponent = ({ onChange, value }) => {
  return (
    <div className="search-section">
      <div className="icon-button">
        <FontAwesomeIcon icon={faSearch} size="lg" className="serach-icon" />
      </div>
      <div className="search-input-section">
        <input type="text" value={value} onChange={onChange} />
      </div>
      <div className="icon-button">
        <FontAwesomeIcon icon={faXmark} size="lg" className="close-icon" />
      </div>
    </div>
  );
};
