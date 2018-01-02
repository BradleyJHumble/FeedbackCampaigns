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
		async (accessToken, refreshToken, profile, done) => { 
			// findOne sees if user has an account
			const existingUser = await User.findOne({ googleId: profile.id})
				if (existingUser) { // if account then nothing
					done(null, existingUser);
				} else { 
					const user = await new User({ googleId: profile.id }).save()
					done(null,user); // if no account then make one
				}
		}
	)
);

