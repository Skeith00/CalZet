var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: ['./src/main.js', 'jquery'],
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
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery", 
			jQuery: "jquery",
			Popper: ['popper.js', 'default'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader", // translates CSS into CommonJS
					options: {						
						alias: {
							"../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
						}
					}
				}, {
					loader: "sass-loader", // compiles Sass to CSS
					options: {
						includePaths: [
						  path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
						]
					  }
				}]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: path.resolve(__dirname, './src')
			},
			{
				test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader',
				include: path.resolve(__dirname, './node_modules/bootstrap-sass/assets/fonts'),				
				options: {
					name: 'fonts/[name].[ext]',
					publicPath: './node_modules/bootstrap-sass/assets/stylesheets'
				},			
			},
		]
	}
};