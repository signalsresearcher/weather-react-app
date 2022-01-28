import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function City(props) {
    return (
    <div className="City">
    <h1>{props.data.city}</h1>
    <h2><FormattedDate date={props.data.date} /> </h2>

    <WeatherTemperature celsius={props.data.temperature} />
      <WeatherIcon code={props.data.icon} alt={props.data.description}/>
    
      <h3>{props.data.description}</h3>
      <h4>Wind: {props.data.wind} km/h</h4>
      <h4>Humidity: {props.data.humidity} %</h4>
    
  </div>
    );
}
