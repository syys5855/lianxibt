var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        main: [path.join(__dirname, './src/main.js')]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 2333,
        publicPath: "/dist/",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                include: /js/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(svg|ttf|eot|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "#cheap-module-source-map",
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css']
    }
};