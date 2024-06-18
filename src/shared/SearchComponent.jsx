import React from "react";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComponent = ({
  name,
  value,
  onChange,
  isImage = false,
  ...rest
}) => {
  return (
    <div className={`search-section ${isImage && "borderRadius-2"}`} {...rest}>
      {!isImage ? (
        <div className="icon-button">
          <FontAwesomeIcon icon={faSearch} size="lg" className="serach-icon" />
        </div>
      ) : (
        <div className="image-label">
          <div className="cross-border"></div>
          <span>Images</span>
        </div>
      )}
      <div className="search-input-section">
        <input type="text" name={name} value={value} onChange={onChange} />
      </div>
      <div className="icon-button">
        <FontAwesomeIcon icon={faXmark} size="lg" className="close-icon" />
      </div>
    </div>
  );
};
