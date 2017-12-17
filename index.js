const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passsport.use(new GoogleStrategy());





// Heroku dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);