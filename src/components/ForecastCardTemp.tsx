import React from 'react';
import { Sun, Cloud, CloudRain, Droplets } from 'lucide-react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-8 h-8 text-orange-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-orange-500" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 hover:bg-blue-50 rounded-lg transition-colors border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
        <div className="w-12 flex justify-center">
          {getWeatherIcon(forecast.condition)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-base">{forecast.day}</div>
          <div className="text-sm text-gray-600">{forecast.date}</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className="text-sm text-gray-600 min-w-[80px] hidden sm:block">
          {forecast.condition}
        </div>
        <div className="text-sm text-blue-600 min-w-[50px] flex items-center">
          <Droplets className="w-4 h-4 mr-1" />
          <span>{forecast.precipitation}%</span>
        </div>
        <div className="text-right min-w-[80px]">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">{forecast.high}°</span>
            <span className="text-gray-400">/</span>
            <span className="text-base text-gray-600">{forecast.low}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;