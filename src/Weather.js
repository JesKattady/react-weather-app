import React from "react";
import WeatherTemp from "./WeatherTemp";

export default function Weather(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date(props.now * 1000);
  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  let date = today.getDate();

  let hours = today.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="Weather">
      <h5>
        As of {hours}:{minutes}
      </h5>
      <h2>{props.city}</h2>
      <h4>
        {day}, {date} {month}
      </h4>
      <h1>
        <WeatherTemp tempC={props.temperature} />
        </h1>
    </div>
  );
}
