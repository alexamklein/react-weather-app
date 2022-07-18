import React from "react";
import FormatTime from "./FormatTime";

import "./Overview.css";

export default function Overview(props) {
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
            <a href="/">°F</a>
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
}
