const path = require('path');

const config = {
  mode: "development",// 生产环境
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js"
  }
};

module.exports = config;
