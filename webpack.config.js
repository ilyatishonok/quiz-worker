
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const core = path.resolve(__dirname, 'src');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            core,
            'node_modules',
        ],
    },
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};
