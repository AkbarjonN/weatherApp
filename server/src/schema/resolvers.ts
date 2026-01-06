import { getWeather } from "../services/weatherService.js";
import { formatWeather } from "../utils/formatWeather.js";

export const resolvers = {
  Query: {
    weatherByCity: async (_: any, { city }: { city: string }) => {
      const data = await getWeather(city);
      console.log("Data after formatWeather:", formatWeather(data));
      return formatWeather(data);
    },
  },
  
};
