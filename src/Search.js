import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactLoading from "react-loading";
import DailyForecast from "./DailyForecast";

export default function Search() {

  const [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
    let apiKey = "115c7b570e452f9a86cfdde576ef94e1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
   &appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showInformation);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showInformation(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      timestamp: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }
  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
          className="search"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="submit" />
      </form>
    </div>
  );
  if (ready) {
    return (
      <div className="Search">
        <Container>
          {form}
          <Row>
            <Col>
              <Weather
                city={weatherData.city}
                temperature={Math.round(weatherData.temperature)}
                now={weatherData.timestamp}
              />
            </Col>
            <Col>
              <Forecast
                description={weatherData.description}
                humidity={weatherData.humidity}
                wind={weatherData.wind}
                icon={weatherData.icon}
              />
            </Col>
          </Row>
        </Container>
        <DailyForecast lat={weatherData.lat} lon={weatherData.lon} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        {form}
        <br />
        <ReactLoading type="spinningBubbles" color=" #ffbcbc" />
      </div>
    );
  }
}
