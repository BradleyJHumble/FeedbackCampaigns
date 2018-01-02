const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => { // user model instance id (user.id) for serialization 
	done(null, user.id); // shortcut referencing the id from mongo
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => { // then promise to stop asynchronous calling that leads to issues
			done(null, user);
		});     
});

passport.use(
	new GoogleStrategy( // google configuration
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true // for Heroku proxy 
		}, 
		(accessToken, refreshToken, profile, done) => { 
			// findOne sees if user has an account
			User.findOne({ googleId: profile.id}).then(existingUser => { // then promise to stop asynchronous calling that leads to issues
					if (existingUser) {
						// already have a record with given profileId/googleId
						done(null, existingUser);
					} else { // if no account then makes an account
						new User({ googleId: profile.id }) // creates an mongoose model instance for new users
						.save() // save to mlab
						.then(user=> done(null, user)); // then promise to stop asynchronous calling that leads to issues
					}
				});
		}
	)
);

