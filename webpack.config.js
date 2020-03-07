const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: "development",
	// 入口
	entry: "./src/js/index.js",
	// 出口
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash:8].js"
	},
	// loader
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2048
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|svg|ttf|eot)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		]
	},
	devtool: "cheap-source-map",
	// 插件
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000
	},
	plugins: [new HtmlWebpackPlugin({
		title: "Webpack App",
		template: "./src/index.html"
	})]
};

module.exports  = config;

