import { WeatherData, ForecastData } from '../types/weather';

export const mockWeatherData: WeatherData = {
  location: 'New York, NY',
  temperature: 75,
  condition: 'Sunny',
  description: 'Clear skies with abundant sunshine',
  feelsLike: 78,
  high: 82,
  low: 68,
  humidity: 45,
  windSpeed: 8,
  pressure: 30.12,
  visibility: 10,
  uvIndex: 7,
  precipitation: 0,
};

export const mockForecastData: ForecastData[] = [
  {
    day: 'Today',
    date: 'Mar 15',
    condition: 'Sunny',
    high: 82,
    low: 68,
    precipitation: 0,
  },
  {
    day: 'Tomorrow',
    date: 'Mar 16',
    condition: 'Partly Cloudy',
    high: 79,
    low: 65,
    precipitation: 10,
  },
  {
    day: 'Wednesday',
    date: 'Mar 17',
    condition: 'Cloudy',
    high: 74,
    low: 62,
    precipitation: 25,
  },
  {
    day: 'Thursday',
    date: 'Mar 18',
    condition: 'Rainy',
    high: 71,
    low: 58,
    precipitation: 80,
  },
  {
    day: 'Friday',
    date: 'Mar 19',
    condition: 'Partly Cloudy',
    high: 77,
    low: 63,
    precipitation: 15,
  },
];