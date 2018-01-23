// prod.js - production keys here
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY, // random key
	stripePblishableKey: process.env.STRIPE_PUBLISHABLE_KEY, // stripe front end key
	stripeSecretKey: process.env.STRIPE_SECRET_KEY, // stripe back end key
		sendGridKey: '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'
}; 
