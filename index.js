const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User'); // needs to load before passport file tries to call it
require('./services/passport'); // dont need to call it so only require
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI); // db connect

const app = express(); // express server through const app

app.use( 
	cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000, // Cookies age equals 30 days
			keys: [keys.cookieKey]
	})
);

// sets up passports system
app.use(passport.initialize()); 
app.use(passport.session());

require('./routes/authRoutes')(app); // calling function with app object

const PORT = process.env.PORT || 5000; // Heroku dynamic port
app.listen(PORT);
