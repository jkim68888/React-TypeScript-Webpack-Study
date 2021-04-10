//프로덕션 환경설정

const webpack = require('webpack');

module.exports = {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codevolution'),
        })
    ]
}