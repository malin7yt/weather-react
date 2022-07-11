import React from 'react';
import Search from "./Search"
import Signature from './Signature';
import Weather from "./Weather"

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="full-app">
        <div className="app-content">
      <h1>Weather App</h1>
      <Search />
      <Weather />
      <Signature />
    </div>
    </div>
    </div>
  );
}
