import { fetcher } from "./fetcher";
import { WeatherError, WeatherSuccess } from "./types";

export const getByCityName = (cityName: string) => {
  return fetcher.get<WeatherError | WeatherSuccess>("/", {
    params: {
      city_name: cityName,
    },
  });
};

export * from "./types";
