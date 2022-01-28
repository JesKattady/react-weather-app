import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";

import "./dailyForecast.css";

export default function ForecastDay(props) {
  console.log(props);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let maxTemp = props.temp.max;
  let minTemp = 2;

  return (
    <div className="daily_forecast">
      <Container>
        <Row>
          <Col className="forecast_day">
            <h4>Thu </h4>
            <div>
              {" "}
              <Icon icon="09d" size={25} color="#ffbcbc" />{" "}
            </div>
            <h4 className="hl_temp">
              {" "}
              <strong>{Math.round(maxTemp)}°</strong> {Math.round(minTemp)}°
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
