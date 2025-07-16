import React from 'react';
import { MapPin, Sun, Cloud, CloudRain } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-16 h-16 text-orange-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-16 h-16 text-gray-500" />;
      case 'rainy':
      case 'rain':
        return <CloudRain className="w-16 h-16 text-blue-500" />;
      default:
        return <Sun className="w-16 h-16 text-orange-500" />;
    }
  };

  const getBackgroundGradient = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return 'from-orange-400 to-yellow-400';
      case 'cloudy':
      case 'partly cloudy':
        return 'from-gray-400 to-gray-500';
      case 'rainy':
      case 'rain':
        return 'from-blue-400 to-blue-600';
      default:
        return 'from-orange-400 to-yellow-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`bg-gradient-to-r ${getBackgroundGradient(weather.condition)} p-4 sm:p-6 text-white`}>
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-base sm:text-lg font-medium">{weather.location}</span>
            </div>
            <div className="text-4xl sm:text-6xl font-light mb-2 text-center sm:text-left">{weather.temperature}°</div>
            <div className="text-lg sm:text-xl mb-1 text-center sm:text-left">{weather.condition}</div>
            <div className="text-sm opacity-90 text-center sm:text-left">
              Feels like {weather.feelsLike}° • {weather.description}
            </div>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            {getWeatherIcon(weather.condition)}
            <div className="text-sm mt-2 text-center opacity-90 flex space-x-4 sm:flex-col sm:space-x-0">
              <div>H: {weather.high}°</div>
              <div>L: {weather.low}°</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="text-sm text-gray-600 mb-4">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
          <div>
            <span className="text-gray-500">Precipitation:</span>
            <span className="ml-2 font-medium">{weather.precipitation}%</span>
          </div>
          <div>
            <span className="text-gray-500">Wind:</span>
            <span className="ml-2 font-medium">{weather.windSpeed} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;