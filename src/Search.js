import React, { useState } from "react";
import axios from "axios";

import "./Search.css"

export default function Search() {
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fe815b58eff4ea6838f63ab0d2363b31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    return setForecast(
        <div className="search-result">
            <div className="row">
              <div className="col-sm-6 mt-3">
      <ul>
        <li> Temperature: {Math.round(response.data.main.temp)}°C </li>
        <li>Description: {response.data.weather[0].description} </li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt=""
          />
        </li>
      </ul>
      </div>
      <div className="col-sm-6 mt-3">
      <ul>
        <li> Temperature: {Math.round(response.data.main.temp)}°C </li>
        <li>Description: {response.data.weather[0].description} </li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt=""
          />
        </li>
      </ul>
      </div>
      </div>
      </div>
    );
  }

  return (
    <div className="searchEngine">
        <div className="search-engine">
      <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9 input-city">
        <input
        className="form-control"
          type="search"
          placeholder="Enter a city"
          autofocus={true}
          onChange={updateCity}
        />
        </div>
        <div className="col-3">
        <button className="btn btn-primary mb-3" typ="submit" value="Search">
            Search
            </button>
            </div>
            </div>
      </form>
      <h3>{forecast}</h3>
      </div>
    </div>
  );
}
