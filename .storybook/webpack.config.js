const path = require("path");
const includePath = path.resolve(__dirname, "..");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: includePath,
        use: [
          "css-hot-loader",
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]-[hash:base64:4]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: includePath,
        use: "url-loader"
      }
    ]
  }
};
