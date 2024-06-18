import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search.js';
import CurrentWeather from './components/current-weather/CurrentWeather.js';
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import Forecast from './components/forecast/Forecast.js';

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [futureWeather, setFutureWeather] = useState(null);

    //Fetch weather data
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        const futureWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        Promise.all([currentWeatherFetch, futureWeatherFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const futureWeatherResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...currentWeatherResponse });
                setFutureWeather(futureWeatherResponse);
                
            })
            .catch((err) => { console.log(err) });


    }

    return (
        <div className='container'>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather props={currentWeather} />}
            {futureWeather && <Forecast props={futureWeather} />}
        </div>
    );
}

export default App;

