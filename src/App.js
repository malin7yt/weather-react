import React from 'react';
import Weather from "./Weather"
import Signature from './Signature';
import DisplayForecast from './DisplayForecast';

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="full-app">
        <div className="app-content">
      <h1>Weather App</h1>
      <Weather defaultCity="New York"/>
      <DisplayForecast />
    </div>
    <Signature />
    </div>
    </div>
    </div>
  );
}
