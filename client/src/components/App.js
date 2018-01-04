import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


// importing components form their files
import Header from './Header';
import Landing from './Landing';
import Terms from './footerLinks/Terms';
import AboutUs from './footerLinks/AboutUs';
import Careers from './footerLinks/Careers';
import ContactUs from './footerLinks/ContactUs';

const Dashboard = () => <h2> Dashboard </h2>
const SurveryNew = () => <h2> SurveryNew </h2>


class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}

	render() {
		return (
			<div > 
			  <BrowserRouter>
			  <div> 
			  	<Header />
			  	<div className="container">
			  	<Route exact path="/" component={Landing} />
			  	<Route exact path="/surveys" component={Dashboard} />
			  	<Route exact path="/surveys/new" component={SurveryNew} />
			  	<Route exact path="/terms-and-policys" component={Terms} />
			  	<Route exact path="/about-us" component={AboutUs} />
			  	<Route exact path="/careers" component={Careers} />
			  	<Route exact path="/contact-us" component={ContactUs} />
			  	</div>
			  </div>
			  </BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);