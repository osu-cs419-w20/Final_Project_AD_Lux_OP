const express = require("express");
const request = require("request");
const app = express();
const port = 8080;

const baseUrl = "https://na1.api.riotgames.com";
const apiKey = "RGAPI-6a16fd84-8670-4615-9cf0-dd93162df7ff";

app.get("/api/*", (req, res) => {
  request(
    `${baseUrl}/${req.params[0]}?api_key=${apiKey}`,
    (error, response, body) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(body);
    }
  );
});

app.get("*", (req, res) => {
  console.log("got a request");
});

app.listen(port, () =>
  console.log(`== Proxy Server started on PORT: ${port}!`)
);
