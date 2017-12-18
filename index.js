const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passsport.use(
	new GoogleStrategy(
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

// Heroku dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);