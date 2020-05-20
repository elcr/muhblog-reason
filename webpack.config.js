const path = require('path')
const nodeExternals = require('webpack-node-externals')


const sourceDirectory = path.join(__dirname, 'src')
const outputDirectory = path.join(__dirname, 'dist')


const config = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    entry: path.join(sourceDirectory, 'Index.bs.js'),
    output: {
        filename: 'index.js',
        path: outputDirectory
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {
                            esModule: false
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }
        ]
    },
    externals: [
        nodeExternals({
            whitelist: [
                /\.css$/
            ]
        })
    ],
    mode: 'development'
}


module.exports = config
