import React from 'react';
import Weather from "./Weather"

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-content">
      <Weather defaultCity="New York"/>

      <div className="signature mt-5">
      <footer>
            This project was coded by 
            <a 
            href="https://malinjensen.com/"
            className="signature-link"
            target="_blank"
            rel="noopener noreferrer"> Malin Jensen</a> and is {" "}
            <a 
            href="https://github.com/malin7yt/weather-react" 
            className="signature-link" 
            target="_blank" 
            rel="noopener noreferrer">
                open-sourced on Github, 
            </a> hosted on {" "}  
            <a 
            href="https://keen-boba-597d50.netlify.app/" 
            className="signature-link" 
            target="_blank" 
            rel="noopener noreferrer">
                 Netlify
            </a>
        </footer>
        </div>
    </div>
    </div>
    </div>
  );
}
