import React from "react";
import InputField from "../InputField";
import Button from "../Button";

function AgeDisplay({ data }) {
  return (
    <div>
      <Button />
      <p>Days: {data?.days}</p>
      <p>Months: {data?.months}</p>
      <p>Years: {data?.years}</p>
    </div>
  );
}

export default AgeDisplay;
