const router = require("express").Router();
const request = require("request");

const riotBaseUrl = "https://na1.api.riotgames.com";
const riotApiKey = "RGAPI-69fe5c6f-6d11-49a2-b14b-de97062b3800";

router.get("/*", (req, res) => {
  request(
    `${riotBaseUrl}/${req.params[0]}?api_key=${riotApiKey}`,
    (error, response, body) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(body);
    }
  );
});

module.exports = router;
