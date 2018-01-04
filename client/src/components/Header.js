import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component { // simple for testing 
	renderContent(){
		switch(this.props.auth) {
			case null:
				return 'Still deciding';
			case false:
				return 'Im logged out';
			default:
				return 'Im logged in';

		}
	}

	render() {
		return (
				<nav>
					<div  className= "nav-wrapper light-blue darken-4">
					<div className="container">
					<a className=" left brand-logo">
					Feedback Campaigns
					</a> {/* ends left brand-logo */}
					<ul className="right">
						{this.renderContent()}
					</ul> 
					</div>
					</div> {/* ends nav-wrapper */}
				</nav>
		);
	}
}

function mapStateToProps({auth}){
	return { auth };
};

export default connect(mapStateToProps)(Header);
