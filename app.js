console.log("imdb tst app");

const express = require("express");
const http= require("http");
const app = express();

app.use(express.static('public'));

http.createServer(app).listen(parseInt(process.env.PORT || 3000));
