const http = require ("http");

console.log(module.main);
const  request =(host, path, port, cb)=>{
	var options = {
	  hostname: host,
	  port: port,
	  path: '/'+path,
	  method: 'POST',
	};

	var req = http.request(options, (res) => {
	  let body = "";	
	  res.setEncoding('utf8');
	  res.on('data', data => body+=data);
	  res.on('end', () => cb(null, body));
	});

	req.on('error', (e) => cb(e, null));
	req.end();
}

if(!module.parent){
//	let host = process.env.HOST || null;
//	let path = process.env.PATH || null;
//	let 
	request('www.omdbapi.com','?t=volver&y=&plot=short&r=json', 80, (err,res)=>{
	if (err) {
		console.log(err);
	}else{
		console.log(res);
		return res;
	}
		
});

}

module.exports = request;
