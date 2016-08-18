var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LoopbackBootPlugin = require('loopback-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './client/polyfills.ts',
		'vendor': './client/vendor.ts',
		'app': './client/main.ts'
	},

	resolve: {
		extensions: ['', '.js', '.ts', '.less']
	},

	module: {
		loaders: [{
			test: /\.ts$/,
			loaders: ['awesome-typescript-loader', 'angular2-template-loader']
		}, {
			test: /\.html$/,
			loader: 'raw-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
			loader: 'file?name=assets/[name].[hash].[ext]'
		}, {
			test: /\.less$/,
			exclude: /node_modules/,
			loader: 'raw!less-loader'
		}, {
			test: /\.css$/,
			include: helpers.root('src', 'app'),
			loader: 'raw'
		}]
	},

	plugins: [
		new LoopbackBootPlugin(),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'client/index.html'
		})
	]
};