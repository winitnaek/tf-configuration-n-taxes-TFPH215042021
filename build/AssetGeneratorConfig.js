const getAssetGeneratorConfig = environment => {
  const commonConfig = {
    encoding: "utf8",
    debug: true,
    sourceFolders: [
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/readonlyfilter/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/readonlygrid/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/autoCompleteMockData/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/cruds/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type1grid/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type2grid/Screens/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/Tools/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/Map Tax Codes/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/Map Tax Types/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/Map Payment Codes/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/MessageViewer/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/AuditLogViewer/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type3grid/PA Services Tax Report/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/type4grid/",
      "C:/Users/rdangi/Documents/Project/tf-new-arch-artifacts/Metadata-Mockdata/sampleDemo/"
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
