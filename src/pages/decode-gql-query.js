import React from 'react';
import { parse, print } from 'graphql';
import lz from 'lz-string';
import styled from 'react-emotion';
import Clipboard from 'react-clipboard.js';
import { Link } from 'react-router-dom';

const Layout = styled('div')`
    margin: auto;
    width: 80%;
    box-sizing: content-box;
`;

const Actions = styled('div')`
    display: flex;
`;

const DecodedText = styled('pre')`
    white-space: pre-wrap;
`;

const Input = styled('input')`
    width: 100%;
    padding: 0.7em;
`;

const CopyToClipboard = styled(Clipboard)`
    border-radius: 0.5em;
    margin-left: 0.5em;
`;

class DecodeGQLQuery extends React.Component {
	constructor() {
		super();
		this.state = {
			query: '',
			decodedQuery: ''
		};
	}

	update = (event) => {
		const query = event.target.value;
		const decodedQuery =
			lz.decompressFromEncodedURIComponent(query) ||
			lz.decompressFromEncodedURIComponent(decodeURIComponent(query));

		this.setState({
			query,
			decodedQuery: decodedQuery ? print(parse(decodedQuery)) : null
		});
	};

	render() {
		return (
			<Layout>
				<Link to="/">Home</Link>
				<h1>Decode GQL query</h1>

				<Actions>
					<Input value={this.state.query} onChange={this.update} placeholder="Query GQL" />

					{this.state.decodedQuery && (
						<CopyToClipboard data-clipboard-text={this.state.decodedQuery}>
							Copy to clipboard
						</CopyToClipboard>
					)}
				</Actions>

				{this.state.decodedQuery && <DecodedText>{this.state.decodedQuery}</DecodedText>}
			</Layout>
		);
	}
}

export default DecodeGQLQuery;
