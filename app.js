console.log("imdb tst app");

const express = require("express");
const http= require("http");
const app = express();

http.createSercer(app).listen(process.env.PORT || 3000);