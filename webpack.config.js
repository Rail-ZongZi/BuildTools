const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
				use: ['style-loader', 'css-loader', 'postcss-loader']
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
	// 开发环境配置（SourceMap）
	devtool: "cheap-module-eval-source-map",
	// 插件
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App",
			template: "./src/index.html"
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
		})
	]
};

module.exports = config;

