import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';

import './App.scss';

type WeatherData = {
  current: {
    temp_f: number;
  };
  location: {
    name: string;
    region: string;
  };
};

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  async function getWeather() {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: 94122,
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="text-blue-500">
        Tailwind and Sass are <div className="App__here">working</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {weatherData ? (
          <p>
            It is currently {weatherData.current.temp_f}&deg;F in{' '}
            <span className="text-yellow-600">
              {weatherData.location.name}, {weatherData.location.region}
            </span>
            .
          </p>
        ) : (
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {weatherData ? (
          <span>
            Powered by{' '}
            <a href="https://www.weatherapi.com/" title="Weather API">
              WeatherAPI.com
            </a>
          </span>
        ) : (
          <button onClick={() => getWeather()}>
            Click here to get weather (requires WeatherAPI key in .env)
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
