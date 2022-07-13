import React, { useState } from "react";
import axios from "axios";


import "./Search.css"

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.main.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Tues 07:00",
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

function search() {
  const apiKey = "fe815b58eff4ea6838f63ab0d2363b31";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-9 input-city">
          <input
          className="form-control"
            type="search"
            placeholder="Enter a city"
            autoFocus={true}
            onChange={handleCityChange}
          />
          </div>
          <div className="col-3">
          <button className="btn btn-primary w-100 mb-3" typ="submit" value="Search">
              Search
              </button>
              </div>
              </div>
        </form>
        </div>
    );
    } else {
      search();
    return "Loading...";
    }
  }