import axios from 'axios';


const API_KEY = '410f1f51adaa08da2ba2ddc7d8c9b087';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // this returns a promise, which is stored in 'request' variable.

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
