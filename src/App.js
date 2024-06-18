import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search.jsx';
import CurrentWeather from './components/current-weather/CurrentWeather.jsx';
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api.js";

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [futureWeather, setFutureWeather] = useState(null);

    const handleOnSearchChange = (searchData) =>{
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
        
        const futureWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
                                     
        Promise.all([currentWeatherFetch, futureWeatherFetch])
                .then(async (response) => {
                    const currentWeatherResponse = await response[0].json();
                    const futureWeatherResponse = await response[1].json();
                    
                    setCurrentWeather({city: searchData.label, ...currentWeatherResponse});
                    setFutureWeather({city: searchData.label, ...futureWeatherResponse});
                    
                })
                .catch((err) => {console.log(err)});
        
        
    }

    return (
        <div className='container'>          
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather props = {currentWeather}/>}
        </div>
    );
}

export default App;

