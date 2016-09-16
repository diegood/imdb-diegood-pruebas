console.log("imdb tst app");

const express = require("express");
const http= require("http");
const app = express();
const request = require("./tools/request");
var counter=0;

app.use(express.static('public'));

app.get("/search",(req,res)=>{
	request("www.omdbapi.com", "?t="+req.query.t, 80, (err,data)=>{
		if(err){
			res.json({error: true, data:null});
		}else{
			res.json({error:null, data:data});
			
		}
	});
});

app.get("/counter", (req, res)=>{
	res.end(""+counter++);
});

http.createServer(app).listen(parseInt(process.env.PORT || 3000));
