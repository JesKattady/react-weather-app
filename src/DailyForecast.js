import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import axios from "axios";
import "./dailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "115c7b570e452f9a86cfdde576ef94e1";
  let lon = props.lon;
  let lat = props.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
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
