import axios from 'axios';


const URL = 'http://api.weatherapi.com/v1/forecast.json?';
const API_KEY = '95ff039c8de7435bae8121030211006';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            key: API_KEY,
            days: 3,
        }
        


    });

    

   
    return data;
}