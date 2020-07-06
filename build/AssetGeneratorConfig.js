const getAssetGeneratorConfig = environment => {
  const commonConfig = {
    encoding: "utf8",
    debug: true,
    sourceFolders: [
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlyfilter/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlygrid/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/autoCompleteMockData/"
    ],
    groupBy: [
      {
        pattern: "_field data.json",
        fileName: "./src/app/metadata/_fieldData.js"
      },
      {
        pattern: "_Page.json",
        fileName: "./src/app/metadata/_metaData.js"
      },
      {
        pattern: "_Screen_Info.json",
        fileName: "./src/app/metadata/_screen_info.js",
        exportSingleObject: true
      }
    ]
  };
  if (environment === "development") {
    commonConfig.groupBy.push({
      pattern: "_MockData.json",
      fileName: "./dist/",
      mapperFileName: "./src/app/metadata/_mockDataMap.js",
      copyFile: true
    });
    commonConfig.groupBy.push({
      pattern: "_AUTOCOMPLETE_MOCKDATA.json",
      fileName: "./dist/",
      mapperFileName: "./src/app/metadata/_mockAutoCompleteMap.js",
      copyFile: true
    });
  }
  return commonConfig;
};
module.exports = getAssetGeneratorConfig;
