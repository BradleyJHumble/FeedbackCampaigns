const express = require('express');
const app = express();
require('./services/passport'); // dont need to call it so only require
require('./routes/authRoutes')(app); // calling function with app object

app.get('/', function(require, response) { // for testing 
response.send("Hello World");
});

// Heroku dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);