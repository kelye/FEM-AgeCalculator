import React from "react";

import icon from "./icon-arrow.svg";
// import icon from "/public/icon-arrow";

function Button() {
  return (
    <>
      <div className="button-container">
        {/* <div className="line"></div> */}
        <button
          form="age-form"
          type="submit"
          alt="submit button"
          className="submit-button"
        >
          <img className="button-icon" src={icon} />
        </button>
      </div>
    </>
  );
}

export default Button;
