
var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalURL);
		next();
	}
};

module.exports = middleware;

