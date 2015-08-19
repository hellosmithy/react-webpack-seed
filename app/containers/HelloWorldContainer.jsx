import React from 'react/addons';

import HelloWorldStore from 'stores/HelloWorldStore';
import HelloWorldActions from 'actions/HelloWorldActions';
import HelloWorld from 'components/HelloWorld/HelloWorld.jsx';

export default class HelloWorldContainer extends React.Component {

	static propTypes = {
		params: React.PropTypes.object
	}

	state = {
		...HelloWorldStore.getState()
	}

	componentDidMount() {
		HelloWorldStore.listen(this.onChange);
	}

	componentWillUnmount() {
		HelloWorldStore.unlisten(this.onChange);
	}

	onChange = (state) => {
		this.setState(state);
	}

	onClick = (event) => {
		HelloWorldActions.incrementHelloWorld();
	}

	render(){
		return (
			<div>
				<HelloWorld
					name={ this.props.params.name || undefined }
					count={ this.state.count }
					onClick={ this.onClick } />
			</div>
		);
	}
}

