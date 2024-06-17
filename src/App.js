import React from 'react';
import './App.css';
import Search from './components/search/Search.jsx';
import CurrentWeather from './components/current-weather/CurrentWeather.jsx';

function App() {

    const handleOnSearchChange = (searchData) =>{
      
    }

    return (
        <div className='container'>          
            <Search onSearchChange={handleOnSearchChange}></Search>
            <CurrentWeather></CurrentWeather>
        </div>
    );
}

export default App;

