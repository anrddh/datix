var moment = require('moment');

module.exports = function(app) {
	app.get('/api/dates/:date', function(req, res) {
		var date = {};

		if (isNaN(req.params.date)) {
			date.unix = moment(req.params.date).unix();
			if(isNaN(date.unix)) {
				date.unix = null;
				date.dateStr = null;
			} else {
				date.dateStr = req.params.date;
			}

		} else {
			date.unix = Number(req.params.date);
			date.dateStr = moment.unix(Number(request.params.date)).format("MMMM Do YYYY, h:mm:ss a");
		}

		res.json(date);
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
