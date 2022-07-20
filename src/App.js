import React, { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [location, setLocation] = useState({ loaded: false });

  function getLocationName(response) {
    setLocation({
      loaded: true,
      name: response.data.name,
    });
  }

  function searchCurrentLocation(position) {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(getLocationName);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  window.onload = getCurrentLocation;

  if (location.loaded) {
    return (
      <div className="App">
        <div className="container">
          <SearchForm currentLocation={location.name} />
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
