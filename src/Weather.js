import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
    }
let apiKey = "b15a7ca92a2c2ec9099ff7e3223bfa9b";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(handleResponse);
return <h2>Hello from my Weather App</h2>;
}
