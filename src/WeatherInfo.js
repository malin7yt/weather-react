import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
    <div className="row">
    <div className="col-sm-6">
        <div className="clearfix">
        <div className="float-left">
        <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <h1 className="result">
        <span className="temperature" id="temperature">85</span>
        <span className="Units">
            <a href="https://github.com/malin7yt/weather-app-malin/blob/main/index.html" className="fahrenheit-link">°F</a> <span id="temp"> | </span> <a href="https://github.com/malin7yt/weather-app-malin/blob/main/index.html" className="celsius-link">°C</a>
        </span>
    </h1>
        <ul>
            <li>
"              <FormattedDate date={props.data.date} />
"            </li>
        <li>
            {props.data.description}
            </li>
        </ul>
    </div>
    </div>
    <div className="col-sm-6">
    <ul>
        <li>Humidity: {props.data.main.humidity}% </li>
        <li>Wind: {props.data.wind.speed}mph</li>
        </ul>
</div>
</div>
</div>
);
}