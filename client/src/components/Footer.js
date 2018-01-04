import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {



	render() {
		return ( <div > <div>

		  <div className="row">
    <div className="col s12 m6 l3"><Link to={'/about-us'} > <p>About Us</p> </Link></div> 
    <div className="col s12 m6 l3"> <Link to={'/terms-and-policys'} ><p>Terms and Policies </p></Link></div>
    <div className="col s12 m6 l3"><Link to={'/careers'} ><p>Careers</p></Link></div>
    <div className="col s12 m6 l3"><Link to={'/contact-us'} ><p>Contact Us</p></Link></div>
  </div> 

  </div>
  </div>
				
				)

	}

};

export default connect()(Footer);