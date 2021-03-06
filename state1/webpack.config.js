var path = require("path");

// 路径常量
var SRC_PATH = path.resolve(__dirname, "src");
var DIST_PATH = path.resolve(__dirname, "dist");

module.exports = {
    entry: [
        path.resolve(SRC_PATH, "entry.js")
    ],
    output: {
        path: DIST_PATH,
        publicPath: "./dist/",
        filename: "index.js"
    }
}
