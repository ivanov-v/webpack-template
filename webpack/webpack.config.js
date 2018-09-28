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
        path: path.resolve(projectPath, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};