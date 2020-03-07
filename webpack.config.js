const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
	mode: "development",// 生产环境
	// 入口
	entry: {
		main: "./src/js/index.js",
		sub: "./src/js/sub.js"
	},
	// 出口
	output: {
		publicPath: 'http://cdn.xxx.com',
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash:8].js"
	},
	// loader 配置
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash:8].[ext]',
						outputPath: 'images',   // 配置打包以后文件别名
						limit: 2048,
						modules: true
					}
				}
			},
			{
				test: /\.(woff|woff2|svg|ttf|eot)$/i,
				use: {
					loader: "file-loader"
				}
			}
		]
	},
	// 插件
	plugins: [
		new CleanWebpackPlugin({
			// cleanStaleWebpackAssets: true
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
		}),
		new HtmlWebpackPlugin({
			title: 'webpack学习之旅',
			template: "./src/index.html"
		})
	]
};

module.exports = config;
