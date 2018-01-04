import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component { // simple for testing 
	renderContent(){
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return (
					<div>
						<li><a href="/auth/google">Login with Google</a></li>
					{/* <li><a href="/auth/facebook">Dont Login with Facebook</a></li> it doesnt work yet :-( */}
						
				</div>
					);
			default:
				return (
						<li><a href="/api/logout">Logout</a></li>
					);
		}
	}

	render() {
		return (
				<nav>
					<div  className= "nav-wrapper indigo lighten-3">
					<div className="container">
					<Link 
					to={this.props.auth ? '/surveys' : '/'} 
					className=" left brand-logo"
					>
					Feedback Campaigns
					</Link> {/* ends left brand-logo */}
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
