import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
	render(){
		return (
			<StripeCheckout
				amount={500} // amount is by cents (pennies)
				token={ token => console.log(token)} // is an callback of the token from stripe
			 	stripeKey={process.env.REACT_APP_STRIPE_KEY} // key from env variables for stripe
			 />
			);
	}
}

export default Payments;