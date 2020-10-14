const getAssetGeneratorConfig = environment => {
  const commonConfig = {
    encoding: "utf8",
    debug: true,
    sourceFolders: [
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlyfilter/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlygrid/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/autoCompleteMockData/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/cruds/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type1grid/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type2grid/Screens/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/Tools/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/Map Tax Codes/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/Map Tax Types/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/Map Payment Codes/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/MessageViewer/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/AuditLogViewer/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type3grid/PA Services Tax Report/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/type4grid/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/sampleDemo/"
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
