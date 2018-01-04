import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {



	render() {
		return ( <div > <div>

		  <div className="row">
    <div className="col s12 m6 l3"><p>About Us</p></div>
    <div className="col s12 m6 l3"><p>Terms of Use</p></div>
    <div className="col s12 m6 l3"><p>Careers</p></div>
    <div className="col s12 m6 l3"><p>Contact Us</p></div>
  </div> 

  </div>
  </div>
				
				)

	}

};

export default connect()(Footer);