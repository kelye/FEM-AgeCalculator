import React from "react";
import InputField from "../InputField";
import Button from "../Button";

function AgeDisplay({ data }) {
  return (
    <>
      <Button />
      <p className="type">
        <span className="numbers">{data?.years}</span> years
      </p>
      <p className="type">
        <span className="numbers">{data?.months}</span> months
      </p>
      <p className="type">
        <span className="numbers">{data?.days}</span> days
      </p>
    </>
  );
}

export default AgeDisplay;
