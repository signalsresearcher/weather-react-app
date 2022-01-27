import React from "react";
import Search from "./Search";
import City from "./City";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Search />
      <City />
      <footer>
          This project was coded by Larissa Murillo and is
          <a
            href="https://github.com/signalsresearcher/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a> 
          and 
          <a
            href="https://gallant-northcutt-3e22a8.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    </div>
    </div>
  );
}
