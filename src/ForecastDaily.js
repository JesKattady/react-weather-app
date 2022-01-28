import React from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dailyForecast.css";

export default function forecastDaily(props) {
  function handleResponse(response) {
    console.log(response);
  }

  console.log(props);
  let lon = props.lon;
  let lat = props.lat;
  let apiKey = "115c7b570e452f9a86cfdde576ef94e1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecastDaily">
      <Container>
        <Row>
          <Col>
            <ForecastDay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
