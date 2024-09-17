const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: {
    'root' : "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    // publicPath: '/'
  },
  optimization: {
    splitChunks: {
            chunks: 'all'
        }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: 'public/assets/img/[name].[ext]'
        }
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
