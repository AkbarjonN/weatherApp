import { useEffect} from "react";
import { useLazyQuery } from "@apollo/client/react";
import { GET_WEATHER} from "../graphql/queries";
import { getWeatherBackground } from "../components/WeatherBackground";
import CurrentWeather from "../components/CurrentWeather";
import Header from "../components/Header";
import NotFoundImg from "../assets/images/404.avif";
import type { WeatherData }  from "../types/Weather";


const Home = () => {
  const [getWeather, { loading, data, error }] =
    useLazyQuery<WeatherData>(GET_WEATHER);
  const handleSearch = (city: string) => {
    if (city.trim()) getWeather({ variables: { city } });
  };
  useEffect(() => {
    if (data?.weatherByCity.icon) {
      const bgImage = getWeatherBackground(data.weatherByCity.icon);

      document.body.style.backgroundImage = `url(${bgImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [data]);
  if (error) return <div className="flex justify-center w-full max-h-[2920px] bg-white z-30"><img src={NotFoundImg} alt="" /></div>;
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header onSearch={handleSearch} data={data}/>
        <CurrentWeather data={data?.weatherByCity} loading={loading}/>
      </div>
    </>
  );
};

export default Home;
