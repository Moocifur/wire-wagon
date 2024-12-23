// webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    services: "./src/services.js",
    contact: "./src/contact.js",
  },
  output: {
    filename: "[name].[contenthash].js", // Simpler filename for dev; overridden in prod
    path: path.resolve(__dirname, "dist"),
    clean: true, // Ensures output directory is cleared before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Updated to reflect the renamed file
      filename: "index.html",
      chunks: ["index"], // Include only 'index' bundle
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html", // Template for about page (same HTML structure)
      filename: "about.html",
      chunks: ["about"], // Include only 'about' bundle
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/services.html", // Template for services page
    //   filename: "services.html",
    //   chunks: ["services"], // Include only 'services' bundle
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/contact.html", // Template for contact page
    //   filename: "contact.html",
    //   chunks: ["contact"], // Include only 'contact' bundle
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Handles CSS files
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // Processes HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Handles static assets (e.g., images)
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
    ],
  },
};