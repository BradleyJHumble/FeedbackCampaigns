const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
	googleId: String,
	facebookId: String,
	credits: { type: Number, default: 25}
});

mongoose.model('users', userSchema); // parsing userSchema as an model through mongoose
