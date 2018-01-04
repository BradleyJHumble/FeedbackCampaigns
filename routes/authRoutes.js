const passport = require('passport');

module.exports = app => { // exports to index
	
	app.get(
		'/auth/google', // route
		passport.authenticate('google', { // using google oauth
			scope: ['profile', 'email'] // fetching profile and emails from google
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google')); // Google Stratergy handeling the google login

	app.get('/logout', (req, res) => {
		req.logout();
		res.send(req.user); // for testing , if works returns empty variable
	}); 

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);    // used for react to see if user is logged in 
	});
};

