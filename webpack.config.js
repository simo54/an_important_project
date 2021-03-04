const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/*.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
