import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import axios from "axios";
import "./dailyForecast.css";

export default function DailyForecast(props) {
  console.log(props.day.daily[0]);
  let maxTemp = props.day.temp.max;
  let minTemp = props.day.temp.min;

  return (
    <div className="daily_forecast">
      <Container>
        <Row>
          <Col className="forecast_day">
            <h4>Thu </h4>
            <div>
              {" "}
              <Icon icon="01d" size={25} color="#ffbcbc" />{" "}
            </div>
            <h4 className="hl_temp">
              {" "}
              <strong>{Math.round(maxTemp)} °</strong> {Math.round(minTemp)}°
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
