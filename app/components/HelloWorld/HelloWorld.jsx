import React from 'react';
import styles from './HelloWorld.css';
import classNames from 'classnames';
const noop = () => {};

export default class HelloWorld extends React.Component {

	static propTypes = {
		name: React.PropTypes.string.isRequired,
		count: React.PropTypes.number.isRequired,
		onClick: React.PropTypes.func,
		className: React.PropTypes.string
	}

	static defaultProps = {
		name: 'World',
		onClick: noop
	}

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	getName = () => {
		return this.capitalizeFirstLetter(this.props.name);
	}

	render() {
		let className = classNames(styles.HelloWorld, this.props.className);
		return (
			<hello-world-component className={ className }
				onClick={ this.props.onClick }
			>
				{ `Hello ${ this.getName() }! I have been clicked ${ this.props.count } times.` }
			</hello-world-component>
		);
	}
}
