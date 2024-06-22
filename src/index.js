import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <div className='weather-icons-license'>
            <span>Weather Icons by </span>
            <a href="https://dovora.com" property="cc:attributionName" rel="cc:attributionURL"> Dovora Interactive </a>
            is licensed under a
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0 International License</a>. <br />
            Based on a work at <a href="https://dovora.com/resources/weather-icons/" rel="dct:source">https://dovora.com/resources/weather-icons/</a>.
        </div>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
