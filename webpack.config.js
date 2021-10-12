const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
   },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        // test: /\.js$/,
        test: /\.(t|j)sx?$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig, new ForkTsCheckerWebpackPlugin()],
  // webpack에서 제공해주는 node Server
  // publicPath: 만약 개발 버전으로 진행하고 있으면 ./test.png를 바로 찾아서 적용할 수 있을 것이다.
  // 그러나 배포 버전에서는 CDN이나 다른 지정된 위치로 이동할 수있다.
  // 따라서 수동으로 url조작해줄 필요가 있다.
  // 배포 버전이 아니라면 webpack으로 번들링된 파일의 위치를 넣을 수 있다.

  // 기존 v3에서는 정적 파일들이 위치하는 디렉토리를 설정할 때 contentBase 옵션을 사용하였다.
  // v4에서는 static 옵션으로 변경되었으며 기본값이 public 디렉토리로 설정되어 있다.
  // 정적 파일들의 위치를 설정하지 않을 경우 static: false 로 설정해주면 된다.
  // https://jjnooys.medium.com/webpack-webpack-dev-server-v4-0-0-de24d4e8ee9d
  devServer: {
  	open: true,
    historyApiFallback: true,
    //contentBase: './',
    static: './',
    hot: true,
  },
}