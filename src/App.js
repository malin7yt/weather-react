import React from 'react';
import Search from "./Search"
import Signature from './Signature';
import WeatherInfo from "./WeatherInfo"
import DisplayForecast from './DisplayForecast';

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="full-app">
        <div className="app-content">
      <h1>Weather App</h1>
      <Search defaultCity="New York"/>
      <WeatherInfo />
      <DisplayForecast />
    </div>
    <Signature />
    </div>
    </div>
    </div>
  );
}
