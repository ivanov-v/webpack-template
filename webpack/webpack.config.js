const path = require('path');
const fs = require('fs');

const projectPath = fs.realpathSync(process.cwd());

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(projectPath, 'build/static/js'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '../media/[name].[hash:8].[ext]',
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};