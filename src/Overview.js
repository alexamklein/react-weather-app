import React, { useState } from "react";
import axios from "axios";
import FormatTime from "./FormatTime";

import "./Overview.css";

export default function Overview(props) {
  const [unit, setUnit] = useState({ metric: true });

  function getImperialData(event) {
    event.preventDefault();
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
    let apiUrl = `${apiEndpoint}?q=${props.weather.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayImperial);
  }

  function displayImperial(response) {
    setUnit({
      metric: false,
      windSpeed: response.data.wind.speed,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
    });
  }

  function displayMetric(event) {
    event.preventDefault();
    setUnit({ metric: true });
  }

  if (unit.metric) {
    return (
      <div className="Overview row mb-4">
        <div className="col-md-7">
          <h1>
            <span>{props.weather.city}, </span>
            <span>{props.weather.countryCode}</span>
          </h1>
          <ul>
            <li>
              <small>
                <FormatTime
                  time={props.weather.time}
                  timezone={props.weather.timezone}
                />
                <span>, {props.weather.description}</span>
              </small>
            </li>
            <li>
              <small>
                <span>Humidity: {props.weather.humidity}%, </span>
                <span>
                  Wind: {Math.round(props.weather.windSpeed * 3.6)} km/h
                </span>
              </small>
            </li>
          </ul>
        </div>
        <div className="col-md-1">
          <img src={props.weather.icon} alt={props.weather.description} />
        </div>
        <div className="col-md-4 current-temp">
          <div>
            <strong>{Math.round(props.weather.temperature)}</strong>
            <span className="temp-units">
              <a href="/" className="active">
                °C
              </a>
              <span> | </span>
              <a href="/" onClick={getImperialData}>
                °F
              </a>
            </span>
          </div>
          <div className="feels-like-temp">
            <small>
              <span>Feels like: {Math.round(props.weather.feelsLike)} °C</span>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Overview row mb-4">
        <div className="col-md-7">
          <h1>
            <span>{props.weather.city}, </span>
            <span>{props.weather.countryCode}</span>
          </h1>
          <ul>
            <li>
              <small>
                <FormatTime
                  time={props.weather.time}
                  timezone={props.weather.timezone}
                />
                <span>, {props.weather.description}</span>
              </small>
            </li>
            <li>
              <small>
                <span>Humidity: {props.weather.humidity}%, </span>
                <span>Wind: {Math.round(unit.windSpeed)} mph</span>
              </small>
            </li>
          </ul>
        </div>
        <div className="col-md-1">
          <img src={props.weather.icon} alt={props.weather.description} />
        </div>
        <div className="col-md-4 current-temp">
          <div>
            <strong>{Math.round(unit.temperature)}</strong>
            <span className="temp-units">
              <a href="/" onClick={displayMetric}>
                °C
              </a>
              <span> | </span>
              <a href="/" className="active">
                °F
              </a>
            </span>
          </div>
          <div className="feels-like-temp">
            <small>
              <span>Feels like: {Math.round(unit.feelsLike)} °F</span>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
