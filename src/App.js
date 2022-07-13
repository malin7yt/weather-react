import React from 'react';
import Search from "./Search"
import Signature from './Signature';
import Weather from "./Weather"
import DisplayForecast from './DisplayForecast';

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="full-app">
        <div className="app-content">
      <h1>Weather App</h1>
      <Search />
      <Weather />
      <DisplayForecast />
    </div>
    <Signature />
    </div>
    </div>
    </div>
  );
}
