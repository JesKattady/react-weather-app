import React from "react";
import Icon from "./Icon";

import "./App.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <ul>
        <li>
          <Icon
            icon={props.icon}
            des={props.description}
            size={75}
            color="#f38ba0"
          />
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
