import React, { useState } from "react";
import "./temp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showInF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showInC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function tempF() {
    return (props.tempC * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        {props.tempC}
        <span className="units">
          <span className="currentUnit">°C</span> |{" "}
          <a href="/" onClick={showInF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {Math.round(tempF())}
        <span className="units">
          <span className="currentUnit">°F</span> |{" "}
          <a href="/" onClick={showInC}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
