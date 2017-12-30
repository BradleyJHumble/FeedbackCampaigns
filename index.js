const express = require('express');
const mongoose = require('mongoose');
require('./services/passport'); // dont need to call it so only require
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
require('./models/User');
 
const app = express();
require('./routes/authRoutes')(app); // calling function with app object

app.get('/', function(require, response) { // for testing 
response.send("Hello World");
});

// Heroku dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);