const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: __dirname +'/app/app.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	devServer: {
    	inline: true,
    	contentBase: __dirname + '/public',
    	port: 3000
	},	

	watch: true,

	module: {
	    rules: [{
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
			    presets: ['es2015', 'react']
			}
	    }]
	},
	plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
  ]

}