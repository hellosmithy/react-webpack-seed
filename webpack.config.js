/*eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

var TEST_ENV = process.env.NODE_ENV === 'test';
var DEV_ENV = process.env.NODE_ENV === 'development';

var entry = {
	app: [path.resolve(__dirname, 'app/index.js')]
}

if (DEV_ENV) {
	entry.app.push('webpack/hot/dev-server');
}

module.exports = {
	context: path.join(__dirname, './app'),
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: TEST_ENV || DEV_ENV ? 'inline-source-map' : false,
	module: {
		loaders: [
			{
				test: /\.spec\.js|\.jsx?$/,
				loaders: ['react-hot-loader','babel-loader?stage=0'],
				include: path.join(__dirname, 'app')
			},
			{ test: /\.css$/, loaders: [
				'style-loader?singleton',
				'css-loader?modules&localIdentName=[path]--[local]',
				'cssnext-loader'
			]},
			{ test: /\.(png|jpg|gif)/, loader: 'url-loader?limit=2500' },
			{ test: /\.(eot|woff|ttf|mp3|ogg)/, loader: 'url-loader?limit=100000' },
			{ test: /\.(json)/, loader: 'json-loader' }
		],
		noParse: [
			path.resolve(node_modules, 'react/dist/react.min.js'),
			path.resolve(node_modules, 'sinon/lib/sinon.js')
		]
	},
	cssnext: {
		browsers: 'last 2 versions',
		plugins: [
			require('postcss-nested')
		],
		features: {
			customProperties: {
				variables: require('./app/css/_vars'),
				appendVariables: true
			},
			customMedia: {
				extensions: require('./app/css/_media'),
				preserve: true,
				appendExtensions: true
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Webpack Seed',
			template: './templates/index.html',
			inject: true,
			favicon: './app/favicon.ico'
		})
	],
	resolve: {
		modulesDirectories: ['node_modules', 'app']
	}
};
