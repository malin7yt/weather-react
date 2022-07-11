import React from 'react';
import Search from "./Search"

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <p>
        <a href="https://github.com/malin7yt/weather-react" class="links" target="_blank" rel="noopener noreferrer">Open source Code</a> by Malin Jensen, hosted on <a href="https://keen-boba-597d50.netlify.app/" class="links" target="_blank" rel="noopener noreferrer">Netlify</a></p>
    </div>
  );
}
