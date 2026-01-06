import { useState } from "react";
import { MdSearch } from "react-icons/md";

import WelcomeScreen from "./WelcomeScreen";
import type { WeatherData } from "../types/Weather";
interface HeaderProps {
  data: WeatherData | undefined;
  onSearch: (city: string) => void;
}
const Header = ({ data, onSearch }: HeaderProps) => {
  const [city, setCity] = useState<string>("");
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center my-8 md:my-16 relative z-20">
          <h1 className="text-2xl md:text-3xl font-bold text-black text-center md:text-left">
            Weather App
          </h1>

          <div className="flex w-full md:w-auto relative z-20">
            <input
              type="text"
              className="flex-1 md:w-[300px] h-12 md:h-14 px-4 md:px-10 rounded-l-3xl text-white outline-none"
              style={{ background: "#2B2A46" }}
              placeholder="Search area here..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              className="bg-blue-500 text-white w-14 md:w-[90px] h-12 md:h-14 flex justify-center items-center rounded-r-3xl"
              onClick={() => {
                onSearch(city);
                setCity("");
              }}
            >
              <MdSearch size={24} className="md:size-[30px]" />
            </button>
          </div>
        </div>

        {!data && <WelcomeScreen />}
      </div>
    </>
  );
};

export default Header;
