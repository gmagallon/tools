import React from 'react';
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

class JsonFormat extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			formattedValue: ''
		};
	}

	update = (event) => {
		const input = event.target.value;
		let formattedValue = '';
		try {
			formattedValue = JSON.stringify(JSON.parse(input), null, 2);
		} catch (e) {}

		this.setState({
			input,
			formattedValue
		});
	};

	render() {
		return (
			<Layout>
				<Link to="/">Home</Link>
				<h1>JSON format</h1>

				<Actions>
					<Input value={this.state.input} onChange={this.update} placeholder="JSON text" />

					{this.state.formattedValue && (
						<CopyToClipboard data-clipboard-text={this.state.formattedValue}>
							Copy to clipboard
						</CopyToClipboard>
					)}
				</Actions>

				{this.state.formattedValue && <DecodedText>{this.state.formattedValue}</DecodedText>}
			</Layout>
		);
	}
}

export default JsonFormat;
