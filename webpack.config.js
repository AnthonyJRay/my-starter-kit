var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        firstComp: './src/js/firstComp/index.js',
        vendor: ['']
    },
        output: { filename: '[name].js',
            path: path.resolve(__dirname,
            'public/js/components') },

        module: {
            rules: [
            {
                test: /\.js$/,                              // Any file that ends with .js
                exclude: /node_modules/,                    // Exclude everything in the node_modules folder
                loader: 'babel-loader',                     // Using babel to compile Es6 down to Es5
                options: {
                    presets: [
                        [ 'es2015', {modules: false} ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context &&
                module.context.indexOf('node_modules') !== -1;
            }
        }),
    ]
}