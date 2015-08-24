import alt from 'flux/alt';

class HelloWorld {

	/**
	 * Increment the HelloWorld click count
	 *
	 * @param  { }
	 * @return { }
	 */
	incrementHelloWorld() {
		this.dispatch();
	}

}

export default alt.createActions(HelloWorld);
