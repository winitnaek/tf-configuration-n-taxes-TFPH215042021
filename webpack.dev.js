const merge = require("webpack-merge");
const WebpackShellPlugin = require("webpack-shell-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.common.js");
var path = require("path");
const BUILD_DIR = path.resolve(__dirname, "dist");
const AssetGenerator = require("./build/AssetGenerator");
const getAssetGeneratorConfig = require("./build/AssetGeneratorConfig");

if (process.env.NODE_ENV === "development") {
  baseConfig.plugins.push(new AssetGenerator(getAssetGeneratorConfig(process.env.NODE_ENV)));

  baseConfig.plugins.push(new WebpackShellPlugin({ onBuildEnd: ["node ./uitests/server/express.js"] }));
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/ALL_BSI_PLANS_MOCKDATA.json",
        to: "../dist/ALL_BSI_PLANS_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/CUSTOM_PAYMENTS_MOCKDATA.json",
        to: "../dist/CUSTOM_PAYMENTS_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/CUSTOM_TAX_PAYMENT_MOCKDATA.json",
        to: "../dist/CUSTOM_TAX_PAYMENT_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/RISKCLASS_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/RISKCLASS_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/RECENT_USAGE.json",
        to: "../dist/RECENT_USAGE.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/POPULATE_V3_STATES_MOCKDATA.json",
        to: "../dist/POPULATE_V3_STATES_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/EXPERIENCE_RATES_MOCKDATA.json",
        to: "../dist/EXPERIENCE_RATES_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/EXPERIENCE_RATE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/EXPERIENCE_RATE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/AUTHORITY_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/AUTHORITY_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SCHOOL_DISTRICT_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/SCHOOL_DISTRICT_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/GARNISHMENT_FORMULA_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/GARNISHMENT_FORMULA_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/CUSTOM_GARNISHMENT_FORMULA_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/CUSTOM_GARNISHMENT_FORMULA_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/COUNTY_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/COUNTY_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/GARNISHMENT_GROUP_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/GARNISHMENT_GROUP_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/GROUP_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/GROUP_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/GROUP_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/GROUP_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/AUTHORITY_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/AUTHORITY_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/PLACE_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/PLACE_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SCHOOL_DISTRICT_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/SCHOOL_DISTRICT_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/CUSTOM_TAX_FORMULAS_MOCKDATA.json",
        to: "../dist/CUSTOM_TAX_FORMULAS_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/COMPANIES_MOCKDATA.json",
        to: "../dist/COMPANIES_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/WORKSITES_MOCKDATA.json",
        to: "../dist/WORKSITES_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/DELETE_CUSTOM_PAYMENT.json",
        to: "../dist/DELETE_CUSTOM_PAYMENT.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/DELETE_CUSTOM_TAX_CODE.json",
        to: "../dist/DELETE_CUSTOM_TAX_CODE.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SAVE_CUSTOM_PAYMENT.json",
        to: "../dist/SAVE_CUSTOM_PAYMENT.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SAVE_CUSTOM_PAYMENT_MOCKDATA.json",
        to: "../dist/SAVE_CUSTOM_PAYMENT_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json",
        to: "../dist/SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TYPEOF_DATA_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TYPEOF_DATA_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/USER_TAX_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/USER_TAX_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/DATE_FIELD_DOC_MOCKDATA.json",
        to: "../dist/DATE_FIELD_DOC_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/FORMULA_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/FORMULA_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/RESIDENT_STATE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/RESIDENT_STATE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/PRINCIPAL_STATE_EMPLOYMENT.json",
        to: "../dist/PRINCIPAL_STATE_EMPLOYMENT.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/EXEMPT_MILITARY_LOCATION_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/EXEMPT_MILITARY_LOCATION_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/PAYMENT_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/PAYMENT_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SAVE_CUSTOM_TAX_CODE.json",
        to: "../dist/SAVE_CUSTOM_TAX_CODE.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/SAVE_WORKSITE_MOCKDATA.json",
        to: "../dist/SAVE_WORKSITE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TAXCODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TAXCODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );

  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/TAXTYPE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/TAXTYPE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: "./uitests/data/COMPANYCODE_AUTOCOMPLETE_MOCKDATA.json",
        to: "../dist/COMPANYCODE_AUTOCOMPLETE_MOCKDATA.json"
      }
    ])
  );
}
module.exports = merge(baseConfig, {
  devtool: "source-map"
});
