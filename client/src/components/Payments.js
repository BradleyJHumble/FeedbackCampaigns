import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	render(){
		return (
			<StripeCheckout
				amount={500} // amount is by cents (pennies)
				token={ token => console.log(token)} // is an callback of the token repersenting the charge from stripe
			 	stripeKey={process.env.REACT_APP_STRIPE_KEY} // key from env variables for stripe
			 	name="Feeback Campaigns"
			 	description="$5 for 5 email credits"
			 >
			 <button className="btn"> Add Credits </button>
			 </StripeCheckout>
			);
	}
}

export default Payments;