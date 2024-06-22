import WeatherDescription from "../weather-description/WeatherDescription";
import "./CurrentWeather.css";
import React from "react";

function CurrentWeather({props}) {

    return (
        <div className="weather">

            <p className="city">{props.city}</p>
            
            <div className="main-section">
                <img alt="weather" className="weather-icon" src = {`icons/${props.weather[0].icon}.png`} />
                <div className="temperature-container">
                    <p className="temperature">{props.main.temp === undefined? "--" : (Math.round((props.main.temp) * 10) / 10)}°C</p>
                    <p className="weather-desc">{props.weather[0].description}</p>
                </div>
            </div>

            <div className="bottom">
                <WeatherDescription data={props}/>
            </div>

        </div>
    );
}



export default CurrentWeather

