import { h, Component } from 'preact';
import 'my-credit-card';

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  title: 'LitElement Bank',
		  info: ''
		};
		// This binding is necessary to make `this` work in the callback
		this.sendInfo = this.sendInfo.bind(this);
	}
	
	componentDidMount() {
		document.getElementById('card').addEventListener('credit-card-details', this.sendInfo)
	}

	componentDidUnmount() {
		document.getElementById('card').removeEventListener('credit-card-details', this.sendInfo)
	}

	sendInfo(event) {
		this.setState({ info: JSON.stringify(event.detail, null,2) });
	}

	render(props, state) {
		return (
			<div>
				<h1>Home</h1>
				<p>This is the Home component with a Web Component.</p>
				<my-credit-card id="card" title={state.title}></my-credit-card>
				<h4>(*) Fill data and click over VISA icon and see how Preact listen credit card info event from Web Component</h4>
				<h5><strong>Credit card info:</strong></h5>
				<p>{ state.info }</p>
			</div>
		);
	}
}
