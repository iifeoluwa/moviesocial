let https = require('https')

function request(host, query) {
	console.log('here');

	let options = {
	  "hostname": host,
	  "port": null,
	  "path": query,
	  "headers": {accept: '*/*'}
	};
	
	let req = https.get(options, function (res) {
	  let chunks = [];
	    console.log('statusCode:', res.statusCode);
  		console.log('headers:', res.headers);
	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });

	  res.on("end", function () {
	    let body = Buffer.concat(chunks);
	    console.log(body);
	  });
	});

	//req.write("{}");
	req.on('error', function(e) {
	  console.error(e);
	});
}

module.exports = request;