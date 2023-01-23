// webpack.config.js настраиваем точку входа
//описываем константу пути
const path = require('path')
//добавляем плагин html-webpack в список констант
const HtmlWebpackPlugin = require('html-webpack-plugin')

//добавляем плагин для работы с CSS
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
		port: 3000, //прописываем порт сервера разработки
		open: true,
		hot: true, //горячая перезагрузка
	},
		//указываем точку входа
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
		//указываем точку выхода - каталог dist
	output: {
		path: path.resolve(__dirname, './dist'),
		clean: true,
		filename: '[name].bundle.js',
			assetModuleFilename: 'assets/[name][ext]'
	},
    //начинаем работу с плагинами
	plugins: [
		new HtmlWebpackPlugin({
				title: 'CV for Egor Kiprin', // Указываем заголовок нашей страницы
				template: path.resolve(__dirname, './src/template.html'), // шаблон
				filename: 'index.html', // название выходного файла
				chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			//title: 'CV for Egor Kiprin', // Указываем заголовок нашей страницы
			template: path.resolve(__dirname, './src/policy.html'), // шаблон
			filename: 'policy.html', // название выходного файла
			chunks: ['policy']
			}),
		//new CleanWebpackPlugin(),
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
			loader: 'babel-loader', // JavaScript
			options: {
				presets: ['@babel/preset-env'],
			},
			},
		},
		],
	},
};