const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('url-loader')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),		
		filename: 'index_bundle.js'
	},
  // plugins: [
  //     new ExtractTextPlugin({
  //         filename: 'assets/css/[name].css',
  //         allChunks: true
  //     }),
  // ],	
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.jsx$/, use: 'babel-loader' },			
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
			{ test: /\.(?:png|jpg|svg)$/, use: 'url-loader' }
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})]
}