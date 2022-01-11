import React from "react";

import "./App.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <ul>
        <li>
          <img src={props.icon} alt="icon" />
        </li>
        <li>
          <strong className="text-capitalize"> {props.description} </strong>
        </li>
        <li>
          Humidity: <strong> {props.humidity}% </strong>
        </li>
        <li>
          Wind Speed: <strong> {Math.round(props.wind)} km/h </strong>
        </li>
      </ul>
    </div>
  );
}
