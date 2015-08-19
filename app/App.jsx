/**
	------------------------------------
	App Component
	------------------------------------

	This is the root component.
**/

'use strict';

import 'babel-core/polyfill';
import React from 'react/addons';

import styles from './App.css';

import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import HelloWorldContainer from 'containers/HelloWorldContainer.jsx';

export default class App extends React.Component {

	static propTypes = {
		children: React.PropTypes.node.isRequired
	}

	render() {
		return (
			<app-main className={ styles.App }>
				<app-content>
					{ this.props.children }
				</app-content>
			</app-main>
		);
	}

}

let routes = [
	{ path: '/', onEnter: (nextState, transition) => transition.to('/hello') },
	{
		path: '/',
		component: App,
		childRoutes: [
			{
				path: '/hello',
				childRoutes: [{ path: '/:name' }],
				component: HelloWorldContainer
			}
		]
	}
];

React.render(<Router history={ history } routes={ routes } />, document.body);
