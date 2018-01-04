import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component { // simple for testing 
	renderContent(){
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return (
						<li><a href="/auth/google">Login with Google</a></li>
					);
			default:
				return (
						<li><a href="">Logout</a></li>
					);
		}
	}

	render() {
		return (
				<nav>
					<div  className= "nav-wrapper indigo lighten-3">
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
