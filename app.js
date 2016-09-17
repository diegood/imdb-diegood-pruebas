console.log("Imdb test app - Clase 3");

const express = require("express");
const http = require("http");
const app = express();
const request = require("./tools/request");

var counter = 0;


app.use(express.static('public'));

app.get("/search",(req,res) => {
console.log(req.query.t);
request('www.omdbapi.com', "/?t=" + req.query.t, (err, data)=>{
res.json(data);
});
});

app.get("/counter", (req,res) => {
res.send("COUNTER: " + counter++);
});

function a(q){
return new Promise((resolve,reject) => {
console.log("Buscando ", q);
request("www.omdbapi.com","/?t=" + q, (err, res)=>{
if(err) reject(err)
else resolve(res);
});
});
}

Promise.all([a("gordo"),a("shakira"),a("titanic")]).then((values => {
console.log(values);
}) );



http.createServer(app).listen(parseInt(process.env.PORT) || 3000);