var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: ['./src/main.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true,
	resolve: {
		alias: {
		  'vue': 'vue/dist/vue.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
					}, {
					loader: "css-loader", // translates CSS into CommonJS
				}, {
					loader: "sass-loader", // compiles Sass to CSS
				}]			
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: path.resolve(__dirname, './src')
			},
		]
	}
};