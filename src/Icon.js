import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";
export default function Icon(props) {
  let url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "10d": "RAIN",
    "10n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "13d": "SLEET",
    "13n": "SLEET",
    "50d": "FOG",
    "50n": "FOG",
    "50d": "WIND",
    "50n": "WIND",
  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[props.icon]}
        color="gray"
        size={75}
        animate={true}
      />
    </div>
  );
}
