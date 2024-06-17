import "./CurrentWeather.css";
import React from "react";

function CurrentWeather(props){
    return(
        <div className="weather">

            <p className="city">Moscow{props.city}</p>

            <div className="main-section">
                <img alt="weather" className="weather-icon" src="icons/01d.png"/>
                <div className="temperature-container">
                    <p className="temperature">44°C</p>
                    <p className="weather-desc">Partly Sunny{props.weather}</p>
                </div>
                
            </div>
            
            <div className="bottom">
                <div className="details">
                    <div className="parameter-row">
                        <span className="param-label">Feels-like</span>
                        <span className="param-value">111°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">2%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="param-label">Pressure</span>
                        <span className="param-value">1100 pha</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CurrentWeather

//<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">Weather Icons</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://dovora.com" property="cc:attributionName" rel="cc:attributionURL">Dovora Interactive</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://dovora.com/resources/weather-icons/" rel="dct:source">https://dovora.com/resources/weather-icons/</a>.