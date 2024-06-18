import React from "react";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComponent = () => {
  return (
    <div>
      <div className="search-section">
        <div>
          <FontAwesomeIcon icon={faSearch} size="lg" className="serach-icon" />
        </div>
        <div className="search-input-section">
          <input type="text" />
        </div>
        <div>
          <FontAwesomeIcon icon={faXmark} size="lg" className="close-icon" />
        </div>
      </div>
    </div>
  );
};
