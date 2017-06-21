let http = require('https')

function request(host, query) {
	
	let options = {
	  "method": "GET",
	  "hostname": host,
	  "port": null,
	  "path": query,
	  "headers": {}
	};

	return new Promise((resolve, reject) => {
		  let req = http.request(options, function (res) {
		  let chunks = [];
		  
		  res.on("data", function (chunk) {
		    chunks.push(chunk);
		  });

		  res.on("end", function () {
		    let body = Buffer.concat(chunks);
		    resolve(JSON.parse(body.toString()));
		  });
		});

		req.on("error", e => {
			reject(e);
		})

		req.end();
	})
	

}


module.exports = request;