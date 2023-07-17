import React from "react";
import InputField from "../InputField";

function AgeDisplay({ data }) {
  return (
    <div>
      <p>Days: {data?.days}</p>
      <p>Months: {data?.months}</p>
      <p>Years: {data?.years}</p>
    </div>
  );
}

export default AgeDisplay;
