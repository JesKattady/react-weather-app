import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./dailyForecast.css";

export default function ForecastDay(props) {
  console.log(props);

  let maxTemp = 3;
  let minTemp = 2;

  return (
    <div className="daily_forecast">
      <Container>
        <Row>
          <Col className="forecast_day">
            <h4>Thu </h4>
            <div></div>
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
