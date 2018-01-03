import React, { Component } from 'react';

class Header extends Component { // simple for testing 
	render() {
		return (
				<nav>
					<div  className= "nav-wrapper  light-blue darken-4">
					<a className="left brand-logo">
					Feedback Campaigns
					</a> {/* ends left brand-logo */}
					<ul className="right">
						<li>
							<a> Login with Google </a>
						</li>
					</ul> 
					</div> {/* ends nav-wrapper */}
				</nav>
		);
	}
}

export default Header;
