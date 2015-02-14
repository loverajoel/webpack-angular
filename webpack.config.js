var path = require("path");
var webpack = require('("../../../../node_modules/webpack');
var CommonsChunkPlugin = require("../../../../node_modules/webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        app: "./app/entry.js",
        vendor: ["./app/commons/angular", "./app/commons/jquery"]
    },
    output: {
        path: "./build",
        // publicPath: '/app/',
        filename: "[name].bundle.js",
        // chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
};