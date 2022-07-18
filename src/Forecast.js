import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row mb-4">
      <div className="col-sm forecast-cards">
        <div className="card today-forecast">
          <div className="card-body">
            <div>Tue</div>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="clear sky"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>23° </strong>
              <span>15°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 0%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Wed</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="rain"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>23° </strong>
              <span>16°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 63%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Thu</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="rain"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>28° </strong>
              <span>18°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 100%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Fri</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="rain"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>23° </strong>
              <span>16°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 27%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Sat</div>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="clear sky"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>19° </strong>
              <span>12°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 0%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Sun</div>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="cloudy"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>22° </strong>
              <span>11°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 0%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm forecast-cards">
        <div>
          <div className="card-body">
            <div>Mon</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="rain"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>15° </strong>
              <span>13°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 86%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
