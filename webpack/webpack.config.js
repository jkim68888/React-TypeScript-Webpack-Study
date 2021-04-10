//merge common/dev/prod webpack config files

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webbpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
}
