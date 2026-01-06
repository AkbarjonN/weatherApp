export function formatWeather(data: any) {
    return {
      city: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind: data.wind.speed,
      icon: data.weather[0].icon, 
    };
  }
  