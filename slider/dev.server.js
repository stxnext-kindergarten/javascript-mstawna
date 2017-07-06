// const Webpack = require("webpack");
// const WebpackDevServer = require("webpack-dev-server");
// const webpackConfig = require("./webpack.dev.js");
//
// const compiler = Webpack(webpackConfig);
// const server = new WebpackDevServer(compiler, {
// 	stats: {
// 		colors: true
// 	},
//   watchOptions: {
//     poll: true
//   }
// });
//
// server.listen(8080, function() {
// 	console.log("Starting server on http://localhost:8080");
// });

var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.dev.js");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  // publicPath: "/" // Same as `output.publicPath` in most cases.
    watchOptions: {
      poll: true
    }
}));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
