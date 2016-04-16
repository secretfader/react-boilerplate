if (
	process.env.NODE_ENV &&
	process.env.NODE_ENV === 'development'
) {
	require('dotenv').load();
}

const path = require('path');
const convict = require('convict');

exports = module.exports = convict({
	api: {
		host: {
			env: 'API_HOST',
			default: 'http://localhost:4000'
		}
	}
});
