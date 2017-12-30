const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.use(
	new GoogleStrategy( // google configuration
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		(accessToken, refreshToken, profile, done) => { 
			// findOne sees if user has an account
			User.findOne({ googleId: profile.id}).then(existingUser => { // then promise to stop asynchronous calling that leads to issues
					if (existingUser) {
						// already have a record with given profileId/googleId
					} else {
						new User({ googleId: profile.id }).save(); // if no account then makes an account
					}
				});
		}
	)
);

