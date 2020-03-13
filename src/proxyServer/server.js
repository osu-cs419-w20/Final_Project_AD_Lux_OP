const express = require('express');
const request = require('request');
const app = express();
const port = 8080;

const baseUrl = 'https://na1.api.riotgames.com'; 
const apiKey = 'RGAPI-60a348f6-14e7-49a5-90d3-58e8ad446e52';

app.get('/api/*', (req, res) => {
    request(`${baseUrl}/${req.params[0]}?api_key=${apiKey}`, (error, response, body) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(body);
    });
});

app.get('*', (req, res) => {
    console.log("got a request");
});


app.listen(port, () => console.log(`== Proxy Server started on PORT: ${port}!`))