const API_KEY = '4fdf2798a3de03275a9f0aad5081de75'; // Replace with your API key

const WeatherAPI = {
  async getWeatherData(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return {
      current: {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
      },
      forecast: [] // Fetch forecast data similarly
    };
  },
};

export default WeatherAPI;
