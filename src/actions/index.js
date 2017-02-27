import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '8135e77b2c9b81be584556d62613e2c6';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='

export function fetchWeather(city) {
    console.log (city);
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    const request = axios.get(url);
    return {type: FETCH_WEATHER, payload: request}
}
