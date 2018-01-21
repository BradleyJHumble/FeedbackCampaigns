const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser =require('body-parser'); // express needs this to access 'req'

// modes requires
require('./models/User'); // needs to load before passport file tries to call it
require('./models/Survey');

// services requires
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
app.use(bodyParser.json());

require('./routes/authRoutes')(app); // calling function with app object
require('./routes/billingRoutes')(app); // routes handeling for billing and recieving stripes tokens

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build')); // Express will server up production assets
	
	// Express will serve up index.html if not recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000; // Heroku dynamic port
app.listen(PORT);
