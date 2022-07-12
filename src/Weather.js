import React from "react";

import "./DisplayForecast.css"

export default function DisplayForecast() {
return (
    <div className="row">
    <div className="col-sm-6">
        <h1 id="searchCity">Cape Coral</h1>
        <h5>Last updated: <span id="weekDayTime"></span>
        <span id="description"></span></h5>
    </div>
    <div className="col-sm-6">
    <h1>
        <img src="" alt="" id="icon" className="float-left" />
        <span className="temperature" id="temperatur"></span>
        <span className="Units">
            <a href="" className="fahrenheit-link">°F</a> <span id="temp"> | </span> <a href="" className="celsius-link">°C</a>
        </span>
    </h1>
    <h5>Humidity: <span id="humidity"></span>% <br />
    Wind: <span id="wind"></span>mph</h5>
</div>
</div>
);
}