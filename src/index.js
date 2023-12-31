import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import InputField from "./components/InputField";
import Button from "./components/Button";
import AgeDisplay from "./components/AgeDisplay";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <InputField />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
