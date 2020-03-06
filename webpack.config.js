const path = require('path');

const config = {
  mode: "development",// 生产环境
  // 入口
  entry: "./src/js/index.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js"
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'images'   // 配置打包以后文件别名
          }
        }
      }
    ]
  }
};

module.exports = config;
