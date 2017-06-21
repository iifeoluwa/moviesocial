let latest = require('./utils/fetch_latest')

function router(app) {

	app.get("/", function(req, res) {
		latest.fetchLatestMovies()
		.then(data => {
			res.json({message: 'You are home.', data: data});
		})
	});
}

module.exports = router;