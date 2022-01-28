import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./dailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div>
        <ForecastDay day={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "115c7b570e452f9a86cfdde576ef94e1";

    return <h1>Loading..</h1>;
  }
}
