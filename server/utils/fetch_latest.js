let request = require("./make_request");
let config = require('../config');

const TMDB_API_KEY = config.TMDB_KEY;
const host = 'api.themoviedb.org';

function fetchLatestMovies() {
	let endpoint = '/3/discover/movie';
	let query = `${host}${endpoint}?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${TMDB_API_KEY}`;
	let response = request(host, query);
}

module.exports = {
	fetchLatestMovies
}