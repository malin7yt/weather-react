import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
    console.log(props);
}

    let apiKey = "fe815b58eff4ea6838f63ab0d2363b31";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-Day">Thu</div>
                    <WeatherIcon code="10n" size={36}/>
                    <div className="WeatherForecast-Temp">
                        <span className="WeatherForecast-temp-max">19° </span>
                        <span className="WeatherForecast-temp-min">10° </span>
                    </div>
                </div>
            </div>
        </div>
    );
}