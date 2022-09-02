import Search from "./Search.js";
import Overview from "./Overview.js";
import Weather from "./Weather.js";
import WeatherDescription from "./WeatherDescription.js";
import Forecast from "./Forecast.js";
import OpenSource from "./OpenSource";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Overview />
            <div className="row">
              <Weather />
              <WeatherDescription />
            </div>
            <Forecast />
          </div>
          <OpenSource />
        </div>
      </div>
    </div>
  );
}
