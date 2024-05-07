// App.js

import React, { useState } from 'react';
import './styles.css';
import './index.css';
// Import the styles.css file
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherAPI from './services/WeatherAPI';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const data = await WeatherAPI.getWeatherData(location);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="app">
      <SearchForm onSearch={fetchWeatherData} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData.current} />
          <Forecast data={weatherData.forecast} />
        </>
      )}
    </div>
  );
};

export default App;
