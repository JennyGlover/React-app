import React from "react";

import "./styles.css";

export default function Weather() {
  return (
    <div className="col-6">
      <div className="clearfix weather-temperature">
        <img
          src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
          alt="Clear"
          id="icon"
          class="float-left"
        />
        <span className="float-left temp">
          <strong id="temperature">93</strong>
          <span className="units">
            <a href="/" id="celcius-link" className="active">
              °F
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}
