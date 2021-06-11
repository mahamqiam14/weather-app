import React, { useState } from 'react';


import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {

        if(e.key === 'Enter') {
        
            const data = await fetchWeather(query);
            setWeather(data);
            
            setQuery('');
        }
    
      }

      


    

    return (
    
        <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            
            {weather.location && (
                <div className="row"> 
                  <div className="column">
                    <div className="location">

                      <h2 className="city-name">
                          <span>{weather.location.name}</span>
                          <sup>{weather.location.country}</sup>
                      </h2>

                    <h3>Local Time: {weather.location.localtime}</h3>

                    <h4>
                     H: {weather.forecast.forecastday[0].day.maxtemp_c}<sup>&deg;C</sup> |
                     L: {weather.forecast.forecastday[0].day.mintemp_c}<sup>&deg;C</sup>
                     </h4>

                    <div className="city-temp">
                      <img className="city-icon" src={weather.current.condition.icon} />
                        {Math.round(weather.current.temp_c)}
                        <sup>&deg;C</sup> 
                        <p>{weather.current.condition.text}</p>
                    </div>
                  </div>
                  
                </div>

                <div className="column">
                  <div className="info">
                    <div className="city">
                        <div>
                        Wind Speed: {weather.current.wind_mph} mph
                        </div>


                        <div>
                          Chance of Rain: {weather.forecast.forecastday[0].day.daily_chance_of_rain}% 
                        </div>

                        <div>
                          Sunrise: {weather.forecast.forecastday[0].astro.sunrise}
                        </div>


                        <div>
                        Humidity: {weather.current.humidity}%
                        </div>
                        
                        <div>
                          Feels like: {weather.current.feelslike_c}<sup>&deg;C</sup> 
                        </div>

                        <div>
                          Sunset : {weather.forecast.forecastday[0].astro.sunset} 
                        </div>

                    </div>
                </div>

                <div className="forecast-container">
                <p>Forecast for the next 2 days: </p>
                        <div className="forecast-element">
                          
                        <h3><span>{weather.forecast.forecastday[1].date}</span></h3>
                        <img src={weather.forecast.forecastday[1].day.condition.icon}/>
                        <h3><span>{weather.forecast.forecastday[1].day.maxtemp_c}<sup>&deg;C</sup> |  {weather.forecast.forecastday[1].day.mintemp_c}<sup>&deg;C</sup></span></h3>
                        <h4>{weather.forecast.forecastday[1].day.condition.text}</h4>
                        </div>
                        <div class="vl"></div>
                        <div className="forecast-element">
                          
                        <h3><span>{weather.forecast.forecastday[2].date}</span></h3>
                        <img src={weather.forecast.forecastday[2].day.condition.icon}/>
                        <h3><span>{weather.forecast.forecastday[2].day.avgtemp_c}<sup>&deg;C</sup> | {weather.forecast.forecastday[2].day.mintemp_c}<sup>&deg;C</sup> </span></h3>
                        <h4>{weather.forecast.forecastday[2].day.condition.text}</h4>
                        </div>
 
                    </div>
                </div>
              </div>
              
            )}
        </div>
  
    );
}

export default App;