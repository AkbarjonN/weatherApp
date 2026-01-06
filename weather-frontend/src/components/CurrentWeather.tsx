import { WeatherIcon } from "./WeatherIcon";
import type { Weather } from "../types/Weather";

interface CurrentWeatherProps {
  data: Weather | undefined;
  loading: boolean;
}
const CurrentWeather = ({ data, loading }: CurrentWeatherProps) => {
  return (
    <>
      <div className="flex justify-center">
        {loading && <p className="text-3xl font-bold text-black">Loading...</p>}
      </div>

      {data && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-around items-center gap-4 md:gap-10 mt-8 md:mt-10 bg-white/15 py-6 md:py-10 px-4 md:px-6 rounded-3xl">
            <div className="space-y-2 text-black">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
                {data.city}
              </h2>

              <p className="font-mono text-xs sm:text-sm md:text-base">
                {new Date()
                  .toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                  .replace(",", ".")}
              </p>

              <div className="flex relative items-start mt-3">
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                  {Math.floor(data.temp)}
                </p>
                <span className="text-sm sm:text-lg md:text-2xl font-semibold mt-1 ml-1">
                  °C
                </span>
              </div>

              <p className="font-mono text-xs sm:text-sm md:text-base">
                Feels: {Math.floor(data.feels_like)}°C
              </p>
            </div>

            <div className=" text-black">
              <div className="scale-75 sm:scale-90 md:scale-100">
                <WeatherIcon iconCode={data.icon} />
              </div>

              <p className="uppercase text-sm sm:text-base md:text-xl font-semibold mt-2">
                {data.description}
              </p>

              <p className="font-mono text-xs sm:text-sm md:text-base">
                Humidity: {data.humidity}%
              </p>
              <p className="font-mono text-xs sm:text-sm md:text-base">
                Wind: {Math.floor(data.wind)} km/h
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
