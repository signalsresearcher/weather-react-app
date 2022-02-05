import React, { useState }from "react";
import axios from "axios";
import "./Search.css";
import City from "./City";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  
  
  function search() {
    const apiKey = "8f5b21be73774c0f6d0d1356d4bd0115";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

function handleCityChange(event) {
  setCity(event.target.value);
}

  
  if(weatherData.ready)
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="search"
          placeholder="Enter a city"
          className="SearchField"
          autoFocus="on"
          onChange={handleCityChange}
        />
         </div>
         

        <div className="col-lg-6 offset-lg-3">
          <input
          type="submit"
          value="search"
          className="btn btn-primary"
          /> 
      </div>
      </form>
      <City data={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>    
  );
  
  else {
  search();
    return"Loading...";
  }
}
