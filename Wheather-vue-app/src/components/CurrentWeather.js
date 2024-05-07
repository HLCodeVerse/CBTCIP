import React from 'react';

const CurrentWeather = ({ data }) => {
  const { temperature, humidity, windSpeed, description } = data;

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default CurrentWeather;
