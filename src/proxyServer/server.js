const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const router = require('./api/index');

app.use(morgan(':method :url :status :res[content-length]'));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () =>
  console.log(`== Proxy Server started on PORT: ${port}!`)
);
