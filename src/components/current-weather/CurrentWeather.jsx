import "./CurrentWeather.css";
import React from "react";

function CurrentWeather({props}) {
    if (!props) return;

    console.log({props});
    return (
        <div className="weather">

            <p className="city">{props.city}</p>
            
            <div className="main-section">
                <img alt="weather" className="weather-icon" src = {`icons/${props.weather[0].icon}.png`} />
                <div className="temperature-container">
                    <p className="temperature">{Math.round((props.main.temp - 273.14) * 10) / 10}°C</p>
                    <p className="weather-desc">{props.weather[0].description}</p>
                </div>
            </div>

            <div className="bottom">
                <div className="details">
                    <div className="parameter-row">
                        <span className="param-label">Feels-like</span>
                        <span className="param-value">{Math.round((props.main.feels_like - 273.14) * 10) / 10}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">{props.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">{props.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Pressure</span>
                        <span className="param-value">{props.main.pressure} hPa</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CurrentWeather

//<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">Weather Icons</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://dovora.com" property="cc:attributionName" rel="cc:attributionURL">Dovora Interactive</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://dovora.com/resources/weather-icons/" rel="dct:source">https://dovora.com/resources/weather-icons/</a>.