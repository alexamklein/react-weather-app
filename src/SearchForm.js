import React, { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import FormatTime from "./FormatTime";
import Forecast from "./Forecast";

import "./SearchForm.css";

export default function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.currentLocation);
  const [unit, setUnit] = useState("metric");

  function getWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      countryCode: response.data.sys.country,
      time: response.data.dt,
      timezone: response.data.timezone,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
    });
  }

  function search() {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleLocationClick() {
    setCity(props.currentLocation);
    search();
  }

  function handleFahrenheitClick(event) {
    event.preventDefault();
    setUnit("imperial");
    search();
  }

  function handleCelsiusClick(event) {
    event.preventDefault();
    setUnit("metric");
    search();
  }

  if (weatherData.loaded && unit === "metric") {
    return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-10">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                autoComplete="off"
                onChange={handleCityChange}
              />
              <small className="form-text text-muted d-none d-md-block">
                Enter city (<em>e.g.</em>, Toronto) or city and 2-letter country
                code (<em>e.g.</em>, Melbourne, AU).
              </small>
              <small className="form-text text-muted d-block d-md-none search-instruction">
                <em>e.g.</em>, Toronto or Melbourne, AU
              </small>
            </div>
            <div className="col-1 p-0 d-none d-md-block">
              <button className="btn btn-outline-primary w-10" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="col-1 p-0">
              <button
                className="btn btn-outline-primary w-10"
                type="submit"
                onClick={handleLocationClick}
              >
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="Overview row mb-4">
          <div className="col-md-7">
            <h1>
              <span>{weatherData.city}, </span>
              <span>{weatherData.countryCode}</span>
            </h1>
            <ul>
              <li>
                <small>
                  <FormatTime
                    time={weatherData.time}
                    timezone={weatherData.timezone}
                  />
                  <span>, {weatherData.description}</span>
                </small>
              </li>
              <li>
                <small>
                  <span>Humidity: {weatherData.humidity}%, </span>
                  <span>
                    Wind: {Math.round(weatherData.windSpeed * 3.6)} km/h
                  </span>
                </small>
              </li>
            </ul>
          </div>
          <div className="col-md-1 weather-icon">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-md-4 current-temp">
            <div>
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="temp-units">
                <a href="/" className="active">
                  °C
                </a>
                <span> | </span>
                <a href="/" onClick={handleFahrenheitClick}>
                  °F
                </a>
              </span>
            </div>
            <div className="feels-like-temp">
              <small>
                <span>Feels like: {Math.round(weatherData.feelsLike)} °C</span>
              </small>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else if (weatherData.loaded && unit === "imperial") {
    return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-10">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                autoComplete="off"
                onChange={handleCityChange}
              />
              <small className="form-text text-muted d-none d-md-block">
                Enter city (<em>e.g.</em>, Toronto) or city and 2-letter country
                code (<em>e.g.</em>, Melbourne, AU).
              </small>
              <small className="form-text text-muted d-block d-md-none search-instruction">
                <em>e.g.</em>, Toronto or Melbourne, AU
              </small>
            </div>
            <div className="col-1 p-0 d-none d-md-block">
              <button className="btn btn-outline-primary w-10" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="col-1 p-0">
              <button
                className="btn btn-outline-primary w-10"
                type="submit"
                onClick={handleLocationClick}
              >
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="Overview row mb-4">
          <div className="col-md-7">
            <h1>
              <span>{weatherData.city}, </span>
              <span>{weatherData.countryCode}</span>
            </h1>
            <ul>
              <li>
                <small>
                  <FormatTime
                    time={weatherData.time}
                    timezone={weatherData.timezone}
                  />
                  <span>, {weatherData.description}</span>
                </small>
              </li>
              <li>
                <small>
                  <span>Humidity: {weatherData.humidity}%, </span>
                  <span>Wind: {Math.round(weatherData.windSpeed)} mph</span>
                </small>
              </li>
            </ul>
          </div>
          <div className="col-md-1 weather-icon">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-md-4 current-temp">
            <div>
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="temp-units">
                <a href="/" onClick={handleCelsiusClick}>
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
                <span>Feels like: {Math.round(weatherData.feelsLike)} °F</span>
              </small>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Rings height="100" width="100" color="#ec6e4c" ariaLabel="loading" />
      </div>
    );
  }
}
