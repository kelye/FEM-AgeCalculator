import React from "react";
import InputField from "../InputField";
import Button from "../Button";

function AgeDisplay({ data }) {
  return (
    <>
      <Button />
      <div className="display-container">
        <p className="type">
          <span className="numbers">{data?.years}</span> years
        </p>
        <p className="type">
          <span className="numbers">{data?.months}</span> months
        </p>
        <p className="type">
          <span className="numbers">{data?.days}</span> days
        </p>
      </div>
    </>
  );
}

export default AgeDisplay;
