import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
    return (
<div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]}/>
                </div>
            </div>
        </div>
    );
} else {
    let apiKey = "f92513deabb1678cc9b5c9c3815535b0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    
    axios.get(apiUrl).then(handleResponse)
  }
}