import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://weather-api138.p.rapidapi.com/weather",
  headers: {
    "X-RapidAPI-Key": process.env.WEATHER_API_KEY,
    "X-RapidAPI-Host": "weather-api138.p.rapidapi.com",
  },
});
