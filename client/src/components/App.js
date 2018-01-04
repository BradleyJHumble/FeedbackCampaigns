import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


// importing components form their files
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

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
			  	<div className=" grey lighten-3  black-text center-align page-footer" 
			  	style={{
			  		height: '10%',
			  		position: 'absolute',
  					right: '0',
  					bottom: '0',
  					left: '0',
  					padding: '1rem' }}>
			  	<Footer  />
			  	</div>
			  	</div>
			  </div>
			  </BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);