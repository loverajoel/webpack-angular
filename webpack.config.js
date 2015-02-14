var path = require("path");
var webpack = require('("../../../../node_modules/webpack');
var CommonsChunkPlugin = require("../../../../node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var bower_dir = __dirname + '/bower_components';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: {
        app: "./app/entry.js",
        vendor: ["angular"]
    },
    resolve: {
        alias: {}
    },
    output: {
        path: "./build",
        publicPath: '/public/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        noParse : []
    },

    plugins: [ new CommonsChunkPlugin("vendor", "vendor.bundle.js") ]
};

config.addVendor('angular', bower_dir + '/angular/angular.js');


module.exports = config;