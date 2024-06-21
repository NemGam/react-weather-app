// @ts-nocheck
import React from "react";
import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton, AccordionItemState }
    from "react-accessible-accordion";
import "./Forecast.css";
import WeatherDescription from "../weather-description/WeatherDescription";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const splitForcasts = (forecast) => {
    const today = new Date(new Date(Date.now()).toLocaleDateString()).getDate();
    
    const forecasts = [[], [], [], [], [], []]; //Today + 5 days
    forecast.forEach(element => {
        forecasts[new Date(new Date(element.dt * 1000).toLocaleDateString()).getDate() - today].push((element));
    });

    forecasts.shift(); //Removing today temperatures

    return forecasts;
}


const formatForecast = (forecast) => {
    
    const result = [];

    const forcasts = splitForcasts(forecast);

    forcasts.forEach(
        (array) => {
            
            let min = 10000, max = -100000;
            let maxEl;
            for (const n of array){
                if (n === undefined) return;

                if (n.main.temp < min){
                    min = n.main.temp;
                }
                
                if (n.main.temp > max){
                    maxEl = n;
                    max = n.main.temp;
                }
            }
            if (min >= 1000 || max <= -1000) return;
            result.push({max_temp: max, min_temp: min, ...maxEl});
        }
    );

    return result;
};


function Forecast({ props }) {

    const day = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day));
    const forecast = formatForecast(props.list);
    console.log(forecast);
    return (
        <>
            <div className="daily-container">    
                <Accordion allowZeroExpanded>
                    {forecast.map((item, ind) => (
                        
                        <AccordionItem key={ind}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <span className="day">{forecastDays[ind]}</span>
                                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                        <span className="description">{item.weather[0].description}</span>
                                        <span className="min-max">{Math.round(item.max_temp)}°C / {Math.round(item.min_temp)}°C</span>
                                        <AccordionItemState>
                                        {({ expanded }) => 
                                            (expanded ? <span className="open-close-arrow">▲</span> 
                                                      : <span className="open-close-arrow">▼</span>)}
                                        </AccordionItemState>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>                
                                <WeatherDescription data={item} font_size='14px'/>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
        
    );
}

export default Forecast