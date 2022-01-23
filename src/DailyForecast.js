import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./dailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);
  function handleResponse(response) {
    setLoaded(true);
    console.log(response.data.daily[0]);
    setForecast(response.data);
  }
  if (loaded) {
    return <ForecastDay day={forecast} />;
  } else {
    let apiKey = "115c7b570e452f9a86cfdde576ef94e1";
    let lon = props.lon;
    let lat = props.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return <h1>Loading..</h1>;
  }
}
