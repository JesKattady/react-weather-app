import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h5>As of 18:47</h5>
      <h2>{props.city}</h2>
      <h4>Tuesday, 11 January</h4>
      <h1>
        {props.temperature} <span className="units">°C|°K</span>
      </h1>
    </div>
  );
}
