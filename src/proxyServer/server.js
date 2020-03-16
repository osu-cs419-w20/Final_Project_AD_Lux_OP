const express = require("express");
const request = require("request");

const ddragonHelper = require("./ddragonHelper");

const app = express();
const port = 8080;

const riotBaseUrl = "https://na1.api.riotgames.com";
const riotApiKey = "RGAPI-a43f9713-d3ac-471c-ab17-46f842f16ce9";

app.get("/riot/*", (req, res) => {
  request(
    `${riotBaseUrl}/${req.params[0]}?api_key=${riotApiKey}`,
    (error, response, body) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(body);
    }
  );
});

app.get("/ddragon/champion/id/:id/info", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(ddragonHelper.getChampionInfoById(req.params.id));
});

app.get("/ddragon/champion/id/:id/image/full", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(
    __dirname + ddragonHelper.getChampionFullImagePathById(req.params.id)
  );
});

app.get("/ddragon/champion/name/:name/info", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(ddragonHelper.getChampionInfoByName(req.params.name));
});

app.get("/ddragon/champion/name/:name/image/full", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(
    __dirname + ddragonHelper.getChampionFullImagePathByName(req.params.name)
  );
});

app.get("/ddragon/item/id/:id/image/full", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(
    __dirname + ddragonHelper.getItemFullImagePathById(req.params.id)
  );
});

app.get("*", (req, res) => {
  res.send("404 ERROR PAGE NOT FOUND");
});

app.listen(port, () =>
  console.log(`== Proxy Server started on PORT: ${port}!`)
);
