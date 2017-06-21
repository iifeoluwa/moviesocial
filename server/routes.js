let latest = require('./utils/fetch_latest')

function router(app) {

	app.get("/", function(req, res) {
		latest.fetchLatestMovies();
		res.json({message: 'You are home.'});
	});
}

module.exports = router;