const router = require("express").Router();
const request = require("request");

const riotBaseUrl = "https://na1.api.riotgames.com";
const riotApiKey = "RGAPI-3019e47e-3a17-42cc-8054-6d148030521e";

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
