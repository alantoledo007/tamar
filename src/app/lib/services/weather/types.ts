export type WeatherError = { cod: "400" | "404"; message: string };

export type WeatherItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherSuccess = {
  coord: { lon: number; lat: number };
  weather: WeatherItem[];
  base: "stations";
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: 200;
};
