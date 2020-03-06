### webpack4版本学习

> 主要包含的知识点
- 彻底学会 `webpack` 的配置
- 理解 `webpack` 的作用及原理
- 上手项目的打包过程配置
- 拥有工程化的前端思维

#### 一： package.json 中配置描述

- `private` 是设置为 `true` 是表示不会私有的不会被发布到 `npm` 上

#### 二： webpack 基本配置

- 需要安装 插件由 `webpack` 和 `webpack-cli` 两个文件

- `mode` 指定 `production` （开发环境）和 `development` (生产环境) 表示代码压缩还是不压缩

#### 三： loader 配置

> 图片配置

- 需要安装插件 `url-loader` 和 `file-loader`, 且 url-loader中包含file-loader

- 配置

```javascript
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          } 
        ] 
      }
    ]
  }
```
