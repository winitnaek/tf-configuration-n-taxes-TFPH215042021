const merge = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.common.js');
var path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');

if (process.env.NODE_ENV === 'development') {
  baseConfig.plugins.push(new WebpackShellPlugin({onBuildEnd:['node ./uitests/server/express.js']}));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/ALL_BSI_PLANS_MOCKDATA.json', to: '../dist/ALL_BSI_PLANS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/CUSTOM_PAYMENTS_MOCKDATA.json', to: '../dist/CUSTOM_PAYMENTS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/CUSTOM_TAX_PAYMENT_MOCKDATA.json', to: '../dist/CUSTOM_TAX_PAYMENT_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/RECENT_USAGE.json', to: '../dist/RECENT_USAGE.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/POPULATE_V3_STATES_MOCKDATA.json', to: '../dist/POPULATE_V3_STATES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/EXPERIENCE_RATES_MOCKDATA.json', to: '../dist/EXPERIENCE_RATES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SUPPLEMENTAL_METHODS_MOCKDATA.json', to: '../dist/SUPPLEMENTAL_METHODS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/CUSTOM_FORMULAS_MOCKDATA.json', to: '../dist/CUSTOM_FORMULAS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/CUSTOM_FORMULAS_CHILD_MOCKDATA.json', to: '../dist/CUSTOM_FORMULAS_CHILD_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/COMPANIES_MOCKDATA.json', to: '../dist/COMPANIES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/WORKSITES_MOCKDATA.json', to: '../dist/WORKSITES_MOCKDATA.json' }]));
}
module.exports = merge(baseConfig, {
  devtool: 'source-map',
});