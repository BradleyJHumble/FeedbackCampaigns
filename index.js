const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passsport.use(
	new GoogleStrategy( // google configuration
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		accessToken => {
			console.log(accessToken);
		}
	)
);

app.get(
	'/auth/google', // route
	passport.authenticate('google', { // using google oauth
		scope: ['profile', 'email'] // fetching profile and emails from google
	})
);

app.get('/', function(require, response) {
response.send("Hello World");
});

// Heroku dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);