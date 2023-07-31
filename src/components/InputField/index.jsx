import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
import AgeDisplay from "../AgeDisplay";

function InputField() {
  const [formData, setFormData] = useState({ day: "", month: "", year: "" });
  const [diffDates, setDiffDates] = useState({
    days: "--",
    months: "--",
    years: "--",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateDate();
  };

  const calculateDate = () => {
    if (formData.day == "" || formData.month == "" || formData.year == "") {
      console.log("must be a valid date");
    } else if (formData.day > 31 || formData.day < 1) {
      console.log("Must be a valid day");
    } else if (formData.month > 12 || formData.month < 1) {
      console.log("Must be a valid month");
    } else if (formData.year > moment().year()) {
      console.log("Must be in the past");
    } else {
      const currentDate = moment(new Date());
      var date = moment(
        `${formData.day}` + `${formData.month}` + `${formData.year}`,
        "DD-MM-YYYY"
      );

      const dateDiff = moment.duration(currentDate.diff(date.toDate()));
      let diffYears = dateDiff.years();
      let diffMonths = dateDiff.months();
      let diffDays = dateDiff.days();
      setDiffDates({
        ...diffDates,
        years: diffYears,
        months: diffMonths,
        days: diffDays,
      });
    }
  };

  return (
    <>
      <div className="input-container">
        <form id="age-form" onSubmit={handleSubmit}>
          <div className="input-label-container">
            <label htmlFor="day">DAY</label>
            <input
              type="text"
              placeholder="DD"
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="month">MONTH</label>
            <input
              type="text"
              placeholder="MM"
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="year">YEAR</label>
            <input
              type="text"
              placeholder="YYYY"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <AgeDisplay data={diffDates} />
    </>
  );
}

export default InputField;
