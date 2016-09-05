module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|public)/,
                loader: 'babel-loader'
            }
        ]
    },
    exclude: /(node_modules|public|tests)/
};