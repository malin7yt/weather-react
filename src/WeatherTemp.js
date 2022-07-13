import React, { useState } from "react";

export default function WeatherTemp(props) {
const [unit, setUnit] = useState("fahrenheit");
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function celsius() {
    return (props.fahrenheit - 32 ) * 5/9;
}

if (unit === 'fahrenheit') {
    return (
        <div className="WeatherTemp">
            <span className="unit-link">{Math.round(props.fahrenheit)}</span> 
                <span className="unit">°F | <a href="/" onClick={showCelsius}>°C</a></span>
          </div>
    );
  } else {
    return (
        <div className="WeatherTemp">
            <span className="unit-link">{Math.round(celsius())}</span> 
                <span className="unit"><a href="/" onClick={showFahrenheit}>°F</a> | °C</span>
          </div>
    );
  }
}