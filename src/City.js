import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <h1>Quito, Ecuador</h1>
      <h2>Saturday, January 22, 2:00 PM</h2>
      <h3>Precipitation:</h3>
      <h3>Wind:</h3>
      <p className="Weather">
        <img src="weather-icon.png" alt="weather icon" width="100" height="100" />
        <span>Windy</span>
      </p>
      <span className="Temperature">18</span>
      <span className="TempUnits">˚C |˚F</span>
    </div>
  );
}
