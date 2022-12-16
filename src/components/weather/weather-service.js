import axios from 'axios';

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=27ba5052c63c60d4475eff7ab4912418";

export const getWeatherByLocation = async () => {
    const response =  await axios.get(WEATHER_API_URL) //end loop to prevent infinite api calls
    return response.data;
}
