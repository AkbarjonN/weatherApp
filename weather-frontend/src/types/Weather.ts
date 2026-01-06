export interface Weather {
  city: string;
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
  wind: number;
  icon: string;
}
export interface WeatherData {
  weatherByCity: Weather;
}
