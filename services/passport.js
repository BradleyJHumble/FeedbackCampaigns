const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
		async (accessToken, refreshToken, profile, done) => { // replaced promises with es2017 async/await syntax
			
			const existingUser = await User.findOne({ googleId: profile.id}) // findOne sees if user has an account
				
			if (existingUser) { // if account then nothing
				return done(null, existingUser);
			} 

			const user = await new User({ googleId: profile.id }).save() // if no account then make one
			done(null,user); 
		}
	)
);

passport.use( 
	new FacebookStrategy( // facebook configuration
		{
			clientID: '160370847862306',
    		clientSecret: '20bf775bad65cfeba6f1075961998829',
    		callbackURL: "/auth/facebook/callback",
			proxy: true // for Heroku proxy 
		}, 
		async (accessToken, refreshToken, profile, done) => { // replaced promises with es2017 async/await syntax
			
			const existingUser = await User.findOne({ facebookId: profile.id}) // findOne sees if user has an account
				
			if (existingUser) { // if account then nothing
				return done(null, existingUser);
			} 

			const user = await new User({ facebookId: profile.id }).save() // if no account then make one
			done(null,user); 
		}
	)
);
