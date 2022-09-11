import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({path: './app.env'})

const currentDate = (new Date()).toISOString().slice(0, 10);
const NEWSAPI_API_KEY = process.env.NEWSAPI_API_KEY;
const url = `https://newsapi.org/v2/everything?q=sports&from=${currentDate}&sortBy=popularity&apiKey=${NEWSAPI_API_KEY}`;

const sportsRouter = new express.Router();

sportsRouter.get('/', async (req, res) => {
    try {
        console.log(url);
        const response = await axios.get(url);
        res.render('sports', {
            articles: response.data.articles.slice(0, 21)
        });
        // res.json(response.data);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
});

export default sportsRouter;