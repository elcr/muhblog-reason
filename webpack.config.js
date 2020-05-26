const path = require('path')

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
                test: /\.s?css$/,
                use: [
                    {loader: 'raw-loader'},
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: /^\/\*!.+?\*\//s,
                            replace: ''
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    },
                    {loader: 'sass-loader'}
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }
        ]
    },
    mode: 'development'
}


module.exports = config
