import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
import AgeDisplay from "../AgeDisplay";

function InputField() {
  const [formData, setFormData] = useState({ day: "", month: "", year: "" });
  let diffYears = "12321";
  let diffMonths = "";
  let diffDays = "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var date = moment(
      `${formData.day}` + `${formData.month}` + `${formData.year}`,
      "DD-MM-YYYY"
    );
    const currentDate = moment(new Date());
    const dateDiff = moment.duration(currentDate.diff(date.toDate()));

    diffYears = dateDiff.years();
    diffMonths = dateDiff.months();
    diffDays = dateDiff.days();
    // console.log(dateDiff.years());
    // console.log(dateDiff.months());
    // console.log(dateDiff.days());
  };

  return (
    <form id="age-form" onSubmit={handleSubmit}>
      <label htmlFor="day">Day</label>
      <input
        type="text"
        id="day"
        name="day"
        value={formData.day}
        onChange={handleChange}
      />

      <label htmlFor="month">Month</label>
      <input
        type="text"
        id="month"
        name="month"
        value={formData.month}
        onChange={handleChange}
      />

      <label htmlFor="year">Year</label>
      <input
        type="text"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
      />
    </form>
  );
}

export default InputField;
