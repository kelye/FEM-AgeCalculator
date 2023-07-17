import React from "react";

import icon from "./icon-arrow.svg";
// import icon from "/public/icon-arrow";

function Button() {
  return (
    <button form="age-form" type="submit" alt="submit button">
      <img className="button-icon" src={icon} />
    </button>
  );
}

export default Button;
