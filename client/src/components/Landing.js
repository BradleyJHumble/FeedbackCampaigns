import React from 'react';
import Footer from './Footer';

const Landing =() => {
	return (
			<div style={{ textAlign:'center'}}>
			<h1> FeedbackCampaigns</h1>
			<h3> Collect feedback from your users</h3>
			<div className=" grey lighten-3  black-text center-align page-footer" 
			  	style={{
			  		height: '10%',
			  		position: 'absolute',
  					right: '0',
  					bottom: '0',
  					left: '0',
  					padding: '1rem' }}>
			  	<Footer />
			  	</div>
		
			</div>
		);
};

export default Landing;