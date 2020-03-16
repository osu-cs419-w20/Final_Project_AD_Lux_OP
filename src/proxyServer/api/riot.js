const router = require('express').Router();
const request = require('request');

const riotBaseUrl = "https://na1.api.riotgames.com";
const riotApiKey = "RGAPI-617f7d55-cd06-4471-8c9c-ec7492d1eb0c";

router.get('/*', (req, res) => {
    console.log(`${riotBaseUrl}/${req.params[0]}?api_key=${riotApiKey}`);
    request(`${riotBaseUrl}/${req.params[0]}?api_key=${riotApiKey}`, (error, response, body) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(body);
        }
    );
});

module.exports = router;