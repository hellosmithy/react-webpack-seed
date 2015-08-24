import alt from 'flux/alt';
import HelloWorldActions from 'flux/actions/HelloWorldActions';

class HelloWorldStore {

	state = {
		count: 0
	}

	constructor() {
		this.bindListeners({
			handleHelloWorldIncrement: HelloWorldActions.INCREMENT_HELLO_WORLD
		});
	}

	handleHelloWorldIncrement() {
		let count = this.state.count += 1;
		this.setState({ count });
	}

}

export default alt.createStore(HelloWorldStore, 'HelloWorldStore');
