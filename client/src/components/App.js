import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// testing 
const Header = () => <h2> Header </h2>
const Dashboard = () => <h2> Dashboard </h2>
const SurveryNew = () => <h2> SurveryNew </h2>
const Landing = () => <h2> Landing </h2>



const App = () => {
	return (
			<div> 
			  <BrowserRouter>
			  <div> 
			  	<Route path="/" component={Landing} />
			  </div>
			  </BrowserRouter>
			</div>
	);
};

export default App;