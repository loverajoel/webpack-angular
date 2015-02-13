var path = require("path");

module.exports = {
    entry: {
        app: "./app/entry.js",
        // vendor: ["jquery, angular"]
    },
    output: {
        path: "./dist",
        publicPath: '/app/',
        filename: "bundle.js"
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor",  filename= "vendor.bundle.js")
    ]
};