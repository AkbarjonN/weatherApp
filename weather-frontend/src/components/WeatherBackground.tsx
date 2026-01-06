import clear from "../assets/images/clear.jpg";
import night from "../assets/images/night.jpg";
import cloudy from "../assets/images/cloudy.jfif";
import rain from "../assets/images/rain.jpg";
import storm from "../assets/images/thounderstorm.webp";
import snow from "../assets/images/snow.webp";
import fog from "../assets/images/fog.jpg";

export function getWeatherBackground(iconCode: string): string {
  if (iconCode === "01d") return clear;
  if (iconCode === "01n") return night;

  if (iconCode.includes("02")) return cloudy;
  if (iconCode.includes("03") || iconCode.includes("04")) return cloudy;

  if (
    iconCode.includes("09") ||
    iconCode.includes("10")
  )
    return rain;
  if (iconCode.includes("11")) return storm;
  if (iconCode.includes("13")) return snow;
  if (iconCode.includes("50n") || iconCode.includes("50d")) return fog;

  return clear;
}
