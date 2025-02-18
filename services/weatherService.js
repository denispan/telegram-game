require('dotenv').config();
const axios = require('axios');
const { farengToC, barToMm } = require('../utils/converters');

const getWeatherByLocation = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;
    const resp = await axios(url);
    return {
        cityName: resp.data.name,
        temperature: farengToC(resp.data.main.temp),
        windSpeed: resp.data.wind.speed,
        pressure: barToMm(resp.data.main.pressure)
    };
};

module.exports = {
    getWeatherByLocation
};
