import React from "react";
import style from "./WeatherDescription.module.css";

function WeatherDescription({
    data: {
        weather = [],
        main = {temp: null, feels_like: null, humidity: '--', pressure: '--'},
        wind = {speed: '--'},
    },
    
    font_size = '16px',
}){

    return(
        <div className="details">
            <div className={style.parameter_row} style={{fontSize: font_size}}>
                <span className={style.parameter_label}>Feels-like</span>
                <span className={style.parameter_value}>{main.feels_like == null? "--" : (Math.round((main.feels_like) * 10) / 10)}°C</span>
            </div>

            <div className={style.parameter_row} style={{fontSize: font_size}}>
                <span className={style.parameter_label}>Wind</span>
                <span className={style.parameter_value}>{wind.speed} m/s</span>
            </div>

            <div className={style.parameter_row} style={{fontSize: font_size}}>
                <span className={style.parameter_label}>Humidity</span>
                <span className={style.parameter_value}>{main.humidity}%</span>
            </div>
            
            <div className={style.parameter_row} style={{fontSize: font_size}}>
                <span className={style.parameter_label}>Pressure</span>
                <span className={style.parameter_value}>{main.pressure} hPa</span>
            </div>
        </div>
    );
}

export default WeatherDescription