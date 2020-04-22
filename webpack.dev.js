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
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/RISKCLASS_AUTOCOMPLETE_MOCKDATA.json', to: '../dist/RISKCLASS_AUTOCOMPLETE_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/RECENT_USAGE.json', to: '../dist/RECENT_USAGE.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/POPULATE_V3_STATES_MOCKDATA.json', to: '../dist/POPULATE_V3_STATES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/EXPERIENCE_RATES_MOCKDATA.json', to: '../dist/EXPERIENCE_RATES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/EXPERIENCE_RATE_AUTOCOMPLETE_MOCKDATA.json', to: '../dist/EXPERIENCE_RATE_AUTOCOMPLETE_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SUPPLEMENTAL_METHODS_MOCKDATA.json', to: '../dist/SUPPLEMENTAL_METHODS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/CUSTOM_TAX_FORMULAS_MOCKDATA.json', to: '../dist/CUSTOM_TAX_FORMULAS_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/COMPANIES_MOCKDATA.json', to: '../dist/COMPANIES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/WORKSITES_MOCKDATA.json', to: '../dist/WORKSITES_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/DELETE_CUSTOM_PAYMENT.json', to: '../dist/DELETE_CUSTOM_PAYMENT.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/DELETE_CUSTOM_TAX_CODE.json', to: '../dist/DELETE_CUSTOM_TAX_CODE.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SAVE_CUSTOM_PAYMENT.json', to: '../dist/SAVE_CUSTOM_PAYMENT.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SAVE_CUSTOM_PAYMENT_MOCKDATA.json', to: '../dist/SAVE_CUSTOM_PAYMENT_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json', to: '../dist/SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SAVE_CUSTOM_TAX_CODE.json', to: '../dist/SAVE_CUSTOM_TAX_CODE.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/SAVE_WORKSITE_MOCKDATA.json', to: '../dist/SAVE_WORKSITE_MOCKDATA.json' }]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/TAXCODE_AUTOCOMPLETE_MOCKDATA.json', to: '../dist/TAXCODE_AUTOCOMPLETE_MOCKDATA.json'}]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/TAXTYPE_AUTOCOMPLETE_MOCKDATA.json', to: '../dist/TAXTYPE_AUTOCOMPLETE_MOCKDATA.json'}]));
  baseConfig.plugins.push(new CopyWebpackPlugin([{ from: './uitests/data/COMPANYCODE_AUTOCOMPLETE_MOCKDATA.json', to: '../dist/COMPANYCODE_AUTOCOMPLETE_MOCKDATA.json'}]));
}
module.exports = merge(baseConfig, {
  devtool: 'source-map',
});