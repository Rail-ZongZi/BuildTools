### webpack4版本学习

> 一: webpack 基本文件配置

- `webpack` 和 `webpack-cli` 配置**开发环境**或**生产环境**

- 配置 `webpack-dev-server` 服务器

- 配置 `html-webpack-plugin` html文件

- 配置 字体文件和**css** 文件 `url-loader` 或 `file-loader`

- 配置 `SourceMap` 开发和生产环境 测试文件

```html
开发环境中使用： cheap-module-eval-source-map
生产环境中使用： cheap-module-source-map
```

- 配置 阿里图标字体文件 [图标字体](https://www.iconfont.cn/)

- 配置热加载（HMR）

```
    devServer: {
      hot: true,
      hotOnly: true
    },
    // 热加载
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
```
