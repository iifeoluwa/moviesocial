let express = require("express");
let router = require('./routes');
let app = express();

let port = process.env.PORT || 5000;

//pass app objeect to router
router(app);

app.listen(port, function() {
	console.log("Listening on " + port);
});