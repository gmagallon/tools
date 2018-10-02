import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import DecodeGQLQuery from './pages/decode-gql-query';

import './App.css';
import JsonFormat from './pages/json-format';

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<React.Fragment>
					<Route exact path="/" component={Home} />
					<Route path="/decode-gql-query" component={DecodeGQLQuery} />
					<Route path="/json-format" component={JsonFormat} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
