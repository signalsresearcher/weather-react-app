import React from "react";
import WeatherIcon from "./WeatherIcon";
import Divider from "@material-ui/core/Divider";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`; 
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }
    
    
    return (
       
<div>
<Divider style={{ background: 'gray' }} />
<div className="WeatherForecast-day">{day()}</div>
<WeatherIcon code={props.data.weather[0].icon} size={36} />

<div className="Forecast-temp">

    <span className="Forecast-temp-min">{minTemperature()}</span>
    <span className="Forecast-temp-max">{maxTemperature()}</span>
  
</div>
</div>
);    

}