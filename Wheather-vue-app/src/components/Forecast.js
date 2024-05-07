import React from 'react';

const Forecast = ({ data }) => {
  return (
    <div className="forecast mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((forecast) => (
        <div key={forecast.date} className="bg-gray-200 p-4 rounded-lg">
          <p className="font-semibold">{forecast.date}</p>
          <img src={`/images/weather-icons/${forecast.icon}.svg`} alt="Weather Icon" className="w-10 h-10 mt-2" />
          <p className="mt-2">{forecast.temperature}°C</p>
          <p className="mt-2">{forecast.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
