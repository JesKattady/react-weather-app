import React from "react";
import ForecastDay from "./ForecastDay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dailyForecast.css";

export default function forecastDaily(props) {
  console.log(props);
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
