const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
 if (req.user.credits == 0) {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for an Email Campaign',
			source: req.body.id,
		});
		console.log("customer was charged");
		 } 
		 	else { 	
		 			req.user.credits -= 1;
 					console.log("credit decrease");
		 	}

				
	const user = await req.user.save();
	res.send(user);
});
}
