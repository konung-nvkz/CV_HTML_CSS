/** This file is necessary for Webpack settings
May be reused for other projects **/

/*path is Node.js native utility module.
The path.resolve() method resolves a sequence of paths or path segments into an absolute path.*/
const path = require('path')

/* Add html-webpack plugins to the list of constants
HtmlWebpackPlugin simplifies creation of HTML files to serve webpack bundles. 
This is useful for webpack bundles that include a hash in the filename which changes every compilation. 
(Here I do not use hashed version)
You can either let the plugin generate an HTML file for you, 
supply your own template using lodash templates, or use your own loader.*/
const HtmlWebpackPlugin = require('html-webpack-plugin')

// CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		port: 9000, //set dev server open port
		open: true,
		hot: true, //enable hot reload
	},
		//set entry point
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
		//set exit point (this time it is "dist" catalogue)
	output: {
		path: path.resolve(__dirname, './dist'),
		//set clean: true,
		clean: process.env.NODE_ENV === "production" ,
		filename: '[name].bundle.js',
			assetModuleFilename: 'assets/[name][ext]'
	},
    //start working with plugins
	plugins: [
		new HtmlWebpackPlugin({
				title: 'CV for Egor Kiprin', // Set header for our start page
				template: path.resolve(__dirname, './src/template.html'),
				filename: 'index.html', // name of the output file
				chunks: ['main']
		}),
		// do the same job for other files: police and map
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/policy.html'), 
			filename: 'policy.html',
			chunks: ['policy']
			}),		
		
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	
	module: {
		rules: [
		{
			test: /\.html$/i,
			loader: 'html-loader',
		},
		{
			test: /\.(c|sa|sc)ss$/i,
			use: [
			devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			{
				loader: 'postcss-loader',
				options: {
				postcssOptions: {
					plugins: [require('postcss-preset-env')],
				},
				},
			},
			'group-css-media-queries-loader',
			'sass-loader',
			],
		},
		{
			test: /\.woff2?$/i,
			type: 'asset/resource',
			generator: {
			filename: 'fonts/[name][ext]'
			}
		},
		{
			test: /\.(jpe?g|png|webp|gif|svg)$/i,
			use: devMode ? [] : [
			{
				loader: 'image-webpack-loader',
				options: {
				mozjpeg: {
					progressive: true,
				},
				optipng: {
					enabled: false,
				},
				pngquant: {
					quality: [0.65, 0.90],
					speed: 4
				},
				gifsicle: {
					interlaced: false,
				},
				webp: {
					quality: 75
				},
				}
			}
			],
			type: 'asset/inline',
		},
		{
			test: /\.m?js$/i,
			exclude: /(node_modules|bower_components)/,
			use: {
			loader: 'babel-loader', // enable older JavaScript
 			options: {
				presets: ['@babel/preset-env'],
			},
			},
		},
		],
	},
};