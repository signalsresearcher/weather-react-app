import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="row justify-content-center">
      <form className="col-lg-6 offset-lg-3 ">
        <input
          type="text"
          placeholder="Enter city name here"
          className="SearchField"
        />

        <span className="input-group-btn">
          <button className="btn btn-primary">Submit</button>
        </span>

        <input
          type="submit"
          value="Current City"
          className="CurrentCityButton"
        />
        
      </form>
    </div>
  );
}
