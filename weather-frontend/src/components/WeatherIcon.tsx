import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";
import cloud from "../assets/images/partlycloudy.jfif";
import rain from "../assets/images/rainy.png";
import storm from "../assets/images/cloudstorm.jfif";
import fog from "../assets/images/cloudfog.jfif";
import snow from "../assets/images/cloudsnow.jfif";

interface WeatherIconProps {
  iconCode: string;
}

export function WeatherIcon({ iconCode }: WeatherIconProps) {
  let iconSrc = sun;

  switch (iconCode) {
    case "01d":
      iconSrc = sun;
      break;
    case "01n":
      iconSrc = moon;
      break;

    case "02d":
    case "03d":
    case "04d":
      iconSrc = cloud;
      break;

    case "02n":
    case "03n":
    case "04n":
      iconSrc = cloud;
      break;

    case "09d":
    case "09n":
    case "10d":
    case "10n":
      iconSrc = rain;
      break;

    case "11d":
    case "11n":
      iconSrc = storm;
      break;

    case "13d":
    case "13n":
      iconSrc = snow;
      break;

    case "50n":
    case "50d":
      iconSrc = fog;
      break;
  }

  return (
    <img
      src={iconSrc}
      alt="weather icon"
      className="w-30 h-30 object-contain rounded-full"
    />
  );
}
