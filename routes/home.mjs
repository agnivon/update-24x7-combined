import express from 'express';
import axios from 'axios';
import iplocate from 'node-iplocate';
import publicIp from 'public-ip';
import News from '../admin/models/news.mjs';

const homeRouter = new express.Router();

async function getCityFromIp() {
    const ip = await publicIp.v4();
    const results = await iplocate(ip);
    return results.city;
}

homeRouter.get('/', async (req, res) => {
    const news = await News.find({}).sort({ date: -1 }).limit(3);
    res.render('home', { news });
});

homeRouter.get('/weather', async (req, res) => {
    const { lat, long } = req.query;

    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
    const LOCATIONIQ_ACCESS_TOKEN = process.env.LOCATIONIQ_ACCESS_TOKEN;

    const openWeatherURI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const locationIqURI = `https://us1.locationiq.com/v1/reverse?key=${LOCATIONIQ_ACCESS_TOKEN}&lat=${lat}&lon=${long}&format=json&addressdetails=1&normalizeaddress=1`;

    try {
        const response1 = await axios.get(openWeatherURI);
        const response2 = await axios.get(locationIqURI);

        if (response1.status === 200) {
            res.json({
                success: true,
                data: response1.data,
                city: response2.data.address.city
            });
        } else {
            throw Error('Weather API response status !== 200');
        }
    } catch (err) {
        console.log(err.message);
        res.json({
            success: false,
            err: err.message
        });
    }
});

export { homeRouter, getCityFromIp };