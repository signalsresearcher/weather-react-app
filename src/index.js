import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica+SC&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap');
    </style>
    <App />
  </>,
  rootElement
);