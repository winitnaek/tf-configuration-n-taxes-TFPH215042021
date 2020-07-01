const getAssetGeneratorConfig = environment => {
  const commonConfig = {
    encoding: "utf8",
    sourceFolders: [
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlyfilter/",
      "//ntsrv/common/Strategic Solutions/Designs & Specs/TF New Arch/Metadata-Mockdata/readonlygrid/"
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
      fileName: "./uitests/data/",
      copyFile: true
    });
  } else {
    // commonConfig.groupBy.push({
    //   pattern: "_MockData.json",
    //   fileName: "./src/uitests/data/",
    //   copyFile: true
    // });
  }
  return commonConfig;
};
module.exports = getAssetGeneratorConfig;
