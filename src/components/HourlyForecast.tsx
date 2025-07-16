import React from 'react';
import { Sun, Cloud, CloudRain, Clock, Droplets } from 'lucide-react';

const HourlyForecast: React.FC = () => {
  const hourlyData = [
    { time: '12 PM', temp: 75, condition: 'sunny', precipitation: 0 },
    { time: '1 PM', temp: 77, condition: 'sunny', precipitation: 0 },
    { time: '2 PM', temp: 79, condition: 'partly cloudy', precipitation: 10 },
    { time: '3 PM', temp: 78, condition: 'partly cloudy', precipitation: 15 },
    { time: '4 PM', temp: 76, condition: 'cloudy', precipitation: 25 },
    { time: '5 PM', temp: 74, condition: 'rainy', precipitation: 60 },
    { time: '6 PM', temp: 72, condition: 'rainy', precipitation: 80 },
    { time: '7 PM', temp: 70, condition: 'cloudy', precipitation: 40 },
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-6 h-6 text-orange-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'rainy':
      case 'rain':
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      default:
        return <Sun className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2 text-blue-600" />
        Hourly Weather Forecast
      </h3>
      <div className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-2 scrollbar-hide">
        {hourlyData.map((hour, index) => (
          <div key={index} className="flex-none text-center min-w-[70px] sm:min-w-[90px] p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-900 mb-2">{hour.time}</div>
            <div className="flex justify-center mb-3">
              {getWeatherIcon(hour.condition)}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{hour.temp}°</div>
            <div className="text-xs text-blue-600 flex items-center justify-center">
              <Droplets className="w-3 h-3 mr-1" />
              {hour.precipitation}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;