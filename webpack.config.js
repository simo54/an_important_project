const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  entry: glob.sync("./src/*.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
