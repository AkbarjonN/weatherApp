import fetch from "node-fetch";
import { OWM_API_KEY } from "../config/env.js";

export async function getWeather(city: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OWM_API_KEY}&units=metric`;
  console.log("Fetching URL:", url);
  const response = await fetch(url);
  const data = await response.json();
  console.log("Response from OWM:", data);
  return data;
}


