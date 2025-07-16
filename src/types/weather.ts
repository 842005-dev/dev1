export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  description: string;
  feelsLike: number;
  high: number;
  low: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  precipitation: number;
}

export interface ForecastData {
  day: string;
  date: string;
  condition: string;
  high: number;
  low: number;
  precipitation: number;
}

export interface HourlyData {
  time: string;
  temperature: number;
  condition: string;
  precipitation: number;
}