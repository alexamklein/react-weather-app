import React, { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

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

  function removeLoaderProperties() {
    const loader = document.getElementById("loader");
    console.log(loader);
  }

  function searchCurrentLocation(position) {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(getWeather);
    removeLoaderProperties();
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  window.onload = getCurrentLocation;

  if (weatherData.loaded) {
    return (
      <div className="App">
        <div className="container">
          <SearchForm currentLocation={weatherData.city} />
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader">
        <Rings height="100" width="100" color="#cc5d43" ariaLabel="loading" />
      </div>
    );
  }
}

export default App;
