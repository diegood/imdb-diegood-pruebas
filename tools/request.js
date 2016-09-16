const http = require ("http");

function request(host, path, cb){
	var options = {
	  hostname: host,
	  port: 80,
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

request('www.omdbapi.com','?t=volver&y=&plot=short&r=json', (err,res)=>{
	console.log(res);
	return res;
});