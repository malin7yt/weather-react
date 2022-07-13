import React from "react";

import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">
    <div className="row">
    <div className="col-sm-6">
        <div className="clearfix">
    <h1 className="result">
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" id="icon" className="float-left" />
        <span className="temperature" id="temperature">85</span>
        <span className="Units">
            <a href="https://github.com/malin7yt/weather-app-malin/blob/main/index.html" className="fahrenheit-link">°F</a> <span id="temp"> | </span> <a href="https://github.com/malin7yt/weather-app-malin/blob/main/index.html" className="celsius-link">°C</a>
        </span>
    </h1>
        <ul>
            <li>Last updated: Tue Jul 12<span id="weekDayTime"></span></li>
        <span id="description"></span></ul>
    </div>
    </div>
    <div className="col-sm-6">
    <ul>
        <li>Humidity: <span id="humidity"></span>87% </li>
        <li>Wind: <span id="wind"></span>5mph</li>
        </ul>
</div>
</div>
</div>
);
}