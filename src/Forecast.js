import React from "react";

import "./App.css";

export default function Forecast(props) {
  let link = ` http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`;

  return (
    <div className="Forecast">
      <ul>
        <li>
          <img src={link} alt={props.description} />
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
