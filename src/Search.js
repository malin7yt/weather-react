import React, { useState } from "react";
import axios from "axios";

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
    );
  }

  return (
    <div className="searchResult">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a query"
          autofocus={true}
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h3>{forecast}</h3>
    </div>
  );
}
