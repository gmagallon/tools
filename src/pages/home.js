import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/decode-gql-query">Decode GQL query</Link>
					</li>
					<li>
						<Link to="/json-format">JSON format</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Home;
