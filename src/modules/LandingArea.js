import React from "react";
import { SearchComponent } from "shared";

export const LandingArea = () => {
  return (
    <div>
      <SearchComponent />
      <SearchComponent isImage={true} style={{ marginTop: "65px" }} />
      <SearchComponent style={{ marginTop: "65px" }} />
    </div>
  );
};
