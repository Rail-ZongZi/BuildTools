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

- url-loader 与 file-loader 区别点在于 `limit`设置图片大小，必须通过 `file-loader`进行相应的处理

- `url-loader` 使用会被编译成 `base64` 文本， 设置 `limit` 大小进行打包以后生产对应的文件夹
```javascript
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048    // 设置一定大小值编译以后可以编译成对应的文件
            }
          } 
        ] 
      }
    ]
  }
```

- `file-loader` 中设置文件别名会直接编译成原始图片

```javascript
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          options: {
            name: '[name].[text]',
            outputPath: 'images' // 配置打包以后文件别名
          } 
        } 
      ]
    } 
```

> 样式配置

- 需要安装的插件为 `style-loader` 与 `css-loader` ，且文件都是从右到左进行执行

```javascript
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ] 
    } 
```

- 使用一些样式预编译样式，比如： `less` , `scss`, `stylus` 等 同时就需要配置一些单独的样式插件进行

- 一个样式文件中引入另一个样式文件 比如： `a.scss` 中引入 `b.scss` 配置，通过 `import` 引入的 `scss` 文件设置需要执行下面文件两个loader

```javascript
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
```

- 设置css模块化

```javascript
    options: {
      importLoaders: 2,
      modules: true
    }
```


