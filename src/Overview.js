import React from "react";
import "./Overview.css";

export default function Overview() {
  let weatherData = {
    city: "Toronto",
    country: "CA",
    day: "Tue",
    time: "10:05 AM",
    description: "Clear",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 60,
    wind: 6,
    temp: 21,
    feelsLike: 21,
  };

  return (
    <div className="Overview row mb-4">
      <div className="col-md-7">
        <h1>
          <span>{weatherData.city}, </span>
          <span>{weatherData.country}</span>
        </h1>
        <ul>
          <li>
            <small>
              <span>{weatherData.day}, </span>
              <span>{weatherData.time}, </span>
              <span>{weatherData.description}</span>
            </small>
          </li>
          <li>
            <small>
              <span>Humidity: {weatherData.humidity}%, </span>
              <span>Wind: {weatherData.wind} km/h</span>
            </small>
          </li>
        </ul>
      </div>
      <div className="col-md-1">
        <img src={weatherData.imgUrl} alt={weatherData.description} />
      </div>
      <div className="col-md-4 current-temp">
        <div>
          <strong>{weatherData.temp}</strong>
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
            <span>Feels like: {weatherData.feelsLike} °C</span>
          </small>
        </div>
      </div>
    </div>
  );
}
