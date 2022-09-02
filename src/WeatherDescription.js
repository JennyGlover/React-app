import React from "react";

import "./styles.css";

export default function WeatherDescription() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: 20<span id="humidity"></span>%
        </li>
        <li>
          Wind: 50<span id="wind-speed"></span> km/h
        </li>
      </ul>
    </div>
  );
}
