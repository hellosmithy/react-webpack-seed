import { default as chai, expect } from 'chai';

import React from 'react/addons';
import spies from 'chai-spies';
import HelloWorld from './HelloWorld.jsx';

const TestUtils = React.addons.TestUtils;

chai.use(spies);

describe('HelloWorld Component', () => {
	let subject;
	let element;
	let spyOnClickHandler = chai.spy(() => {});

	let defaultProps = {
		name: 'Dave',
		count: 0,
		onClick: spyOnClickHandler
	};

	beforeEach(() => {
		subject = TestUtils.renderIntoDocument( React.createElement(HelloWorld, defaultProps) );
		element = TestUtils.findRenderedDOMComponentWithTag(subject, 'hello-world-component');
	});

	it('should trigger an onClick handler when the component is clicked', () => {
		React.addons.TestUtils.Simulate.click(element);
		expect(spyOnClickHandler).to.have.been.called();
	});
});
