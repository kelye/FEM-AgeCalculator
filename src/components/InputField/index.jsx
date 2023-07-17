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
    var date = moment(
      `${formData.day}` + `${formData.month}` + `${formData.year}`,
      "DD-MM-YYYY"
    );
    const currentDate = moment(new Date());
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
  };

  return (
    <>
      <div className="input-container">
        <form id="age-form" onSubmit={handleSubmit}>
          <div className="input-label-container">
            <label htmlFor="day">Day</label>
            <input
              type="text"
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="month">Month</label>
            <input
              type="text"
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="year">Year</label>
            <input
              type="text"
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
