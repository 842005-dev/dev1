import ForecastCard from "./components/ForecastCard";
import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Droplets,
  Eye,
  Thermometer,
  Calendar,
  Sunrise,
  Sunset,
  Moon
} from 'lucide-react';

import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import HourlyForecast from './components/HourlyForecast';
import WeatherDetails from './components/WeatherDetails';
import SearchBar from './components/SearchBar';
import PersonalInfo from './components/PersonalInfo';
import { WeatherData, ForecastData } from './types/weather';
import { mockWeatherData, mockForecastData } from './data/mockData';

function App() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [location, setLocation] = useState('Ahmedabad, Gujarat, India');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentWeather({
        ...mockWeatherData,
        location: 'Ahmedabad, Gujarat, India',
        temperature: 32,
        condition: 'Sunny',
        description: 'Sunny and pleasant',
        feelsLike: 35,
        high: 35,
        low: 22,
      });
      setForecast(mockForecastData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLocationSearch = (searchLocation: string) => {
    setLocation(searchLocation);
    setIsLoading(true);
    setTimeout(() => {
      setCurrentWeather({
        ...mockWeatherData,
        location: searchLocation,
        temperature: Math.round(Math.random() * 40 + 10)
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-2 border-b border-blue-500">
            <div className="flex items-center justify-between">
              <div className="text-xs text-blue-100">
                Weather Forecast & Current Conditions
              </div>
              <PersonalInfo />
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <Sun className="w-8 h-8 text-orange-300" />
                <div>
                  <h1 className="text-2xl font-bold">AccuWeather</h1>
                  <div className="text-sm text-blue-100">Weather Forecast & Reports</div>
                </div>
              </div>
              <SearchBar onLocationSearch={handleLocationSearch} />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {currentWeather && (
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white p-6 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5" />
                      <h2 className="text-xl font-semibold">{currentWeather.location}</h2>
                    </div>
                    <div className="text-sm opacity-90 mb-4">
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-6xl font-light">{currentWeather.temperature}°</div>
                      <div>
                        <div className="text-xl mb-1">{currentWeather.condition}</div>
                        <div className="text-sm opacity-90">RealFeel® {currentWeather.feelsLike}°</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Sun className="w-20 h-20 text-orange-300 mb-2" />
                    <div className="text-sm">
                      <div>H: {currentWeather.high}°</div>
                      <div>L: {currentWeather.low}°</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ✅ Keep only Current Weather tab */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button className="py-2 px-1 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">
                  Current Weather
                </button>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Today's Weather
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Thermometer className="w-6 h-6 text-red-500 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Feels Like</div>
                      <div className="font-semibold">{currentWeather?.feelsLike}°</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Wind className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Wind</div>
                      <div className="font-semibold">{currentWeather?.windSpeed} mph</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Droplets className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Humidity</div>
                      <div className="font-semibold">{currentWeather?.humidity}%</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Eye className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Visibility</div>
                      <div className="font-semibold">{currentWeather?.visibility} mi</div>
                    </div>
                  </div>
                </div>

                {/* ✅ Hourly Forecast stays */}
                <HourlyForecast />

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    5-Day Weather Forecast
                  </h3>
                  <div className="space-y-1">
                    {forecast.map((day, index) => (
                      <ForecastCard key={index} forecast={day} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {currentWeather && <WeatherDetails weather={currentWeather} />}

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Sunrise className="w-5 h-5 mr-2 text-orange-500" />
                    Sun & Moon
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Sunrise className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">Sunrise</span>
                      </div>
                      <span className="font-semibold">6:24 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Sunset className="w-5 h-5 text-orange-600" />
                        <span className="font-medium">Sunset</span>
                      </div>
                      <span className="font-semibold">7:52 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Moon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Moonrise</span>
                      </div>
                      <span className="font-semibold">8:15 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Air Quality</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Air Quality Index</span>
                      <span className="font-semibold text-green-600">Good (42)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-2/5"></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Air quality is satisfactory for most people.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Weather Alerts</h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium text-yellow-800">Heat Advisory</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Temperatures may reach dangerous levels. Stay hydrated and avoid prolonged outdoor activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2024 AccuWeather-Inspired Weather Application. Built by Patel Dev Mayurbhai.
            </p>
            <p className="text-xs mt-2">
              This is a demonstration application inspired by AccuWeather's design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
