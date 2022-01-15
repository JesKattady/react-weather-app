import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import "./dailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="daily_forecast">
      <Container>
        <Row>
          <Col className="forecast_day">
            <h4>Thu</h4>
            <div>
              {" "}
              <Icon icon="01d" size={25} color="#ffbcbc" />{" "}
            </div>
            <h4 className="hl_temp">
              {" "}
              <strong>6°</strong> 4°
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
