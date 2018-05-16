const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');
var webpack           = require("webpack");

module.exports = {
	mode: 'development',
	entry: {		
		'bundle.css': [
	      path.resolve(__dirname + '/app/css/color.css'),
	      path.resolve(__dirname + '/app/css/plugins.css'),
	      path.resolve(__dirname + '/app/css/reset.css'),
	      path.resolve(__dirname + '/app/css/style.css')
	    ],
	    'bundle.js': [
	    	path.resolve(__dirname + '/app/app.js')
	    ]
	},

	output: {
		filename: '[name]',
		path: __dirname + '/public'
	},

	devServer: {
    	inline: true,
    	contentBase: __dirname + '/public',
    	port: 3000
	},	

	watch: true,

	module: {
	    rules: [
			{
		        test: /\.exec\.js$/,
		        use: [ 'script-loader' ]
		    },
	    	{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader',
		        query: {
				    presets: ['es2015', 'react']
				},			
	    	},	
	    	{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: 'css-loader'
		        })
     	    },
     	    {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }   	
	    ]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    	new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
}