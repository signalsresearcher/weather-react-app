import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    
    function fahrenheit() {
        return (props.celsius * 9)/5 + 32;
    }
    
    if (unit === 'celsius') {
    return (
    <div className="WeatherTemperature"> 
        <span className="temperature">
        {Math.round(props.celsius)}
        </span>

        <span className="TempUnits">˚C</span>|<span className="TempUnits">˚<a href="/" onClick={showFahrenheit}>F</a>
        </span>
    </div>
);
    } else {
        return (
            <div className="WeatherTemperature"> 
                <span className="temperature">
                {Math.round(fahrenheit())}
                </span>
        
                <span className="TempUnits">˚<a href="/" onClick={showCelsius}>C</a></span>|<span className="TempUnits">˚F
                </span>
            </div>
        ); 
    }
}