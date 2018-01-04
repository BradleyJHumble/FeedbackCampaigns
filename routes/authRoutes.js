const passport = require('passport');

module.exports = app => { // exports to index

// GOOGLE AUTH CONFIGURATION!!!
	app.get(
		'/auth/google', // route
		passport.authenticate('google', { // using google oauth
			scope: ['profile', 'email'] // fetching profile and emails from google
		})
	);

	app.get(
	'/auth/google/callback', 
	passport.authenticate('google'),
	(req, res) => {
		res.redirect('/surveys');
	}
	); // Google Stratergy handeling the google login

//FACEBOOK CONFIGURATION!!!
	app.get(
		'/auth/facebook', // route
		passport.authenticate('facebook', { // using facebook oauth
			scope: ['profile', 'email'] // fetching profile and emails from facebook
		})
	);

	app.get(
	'/auth/facebook/callback', 
	passport.authenticate('facebook'),
	(req, res) => {
		res.redirect('/surveys');
	}
	); // Facebook Stratergy handeling the facebook login


// API CONFIGURATION!!!

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	}); 

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);    // used for react to see if user is logged in 
	});
};

