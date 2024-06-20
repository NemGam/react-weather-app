import "./CurrentWeather.css";
import React from "react";

function CurrentWeather({props: {
    city = '--',
    weather = [],
    icon = weather[0].icon || "unknown",
    main = {temp: null, feels_like: null, humidity: '--', pressure: '--'},
    wind = {speed: '--'},
    dt = 0,
}}) {

    return (
        <div className="weather">

            <p className="city">{city}</p>
            
            <div className="main-section">
                <img alt="weather" className="weather-icon" src = {`icons/${icon}.png`} />
                <div className="temperature-container">
                    <p className="temperature">{main.temp == null? "--" : (Math.round((main.temp) * 10) / 10)}°C</p>
                    <p className="weather-desc">{weather[0].description}</p>
                </div>
            </div>

            <div className="bottom">
                <div className="details">
                    <div className="parameter-row">
                        <span className="param-label">Feels-like</span>
                        <span className="param-value">{main.feels_like == null? "--" : (Math.round((main.feels_like) * 10) / 10)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">{wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">{main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Pressure</span>
                        <span className="param-value">{main.pressure} hPa</span>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default CurrentWeather

//<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">Weather Icons</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://dovora.com" property="cc:attributionName" rel="cc:attributionURL">Dovora Interactive</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://dovora.com/resources/weather-icons/" rel="dct:source">https://dovora.com/resources/weather-icons/</a>.