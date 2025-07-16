import React from 'react';
import { Wind, Droplets, Eye, Thermometer, Gauge, Sun } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherDetailsProps {
  weather: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  const details = [
    {
      icon: <Thermometer className="w-5 h-5 text-red-500" />,
      label: 'Feels Like',
      value: `${weather.feelsLike}°`,
    },
    {
      icon: <Wind className="w-5 h-5 text-blue-500" />,
      label: 'Wind Speed',
      value: `${weather.windSpeed} mph`,
    },
    {
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      label: 'Humidity',
      value: `${weather.humidity}%`,
    },
    {
      icon: <Eye className="w-5 h-5 text-gray-500" />,
      label: 'Visibility',
      value: `${weather.visibility} mi`,
    },
    {
      icon: <Gauge className="w-5 h-5 text-purple-500" />,
      label: 'Pressure',
      value: `${weather.pressure} in`,
    },
    {
      icon: <Sun className="w-5 h-5 text-orange-500" />,
      label: 'UV Index',
      value: `${weather.uvIndex}`,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Conditions</h3>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3 flex-1">
              {detail.icon}
              <span className="text-sm font-medium text-gray-700">{detail.label}</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;