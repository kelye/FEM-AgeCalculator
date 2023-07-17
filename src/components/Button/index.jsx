import React from "react";
// import icon from "./icon-arrow";
import icon from "/public/icon-arrow";

function Button() {
  return (
    <button form="age-form" type="submit" alt="submit button">
      <img src={icon} width="50px" height="50px" />
    </button>
  );
}

export default Button;
