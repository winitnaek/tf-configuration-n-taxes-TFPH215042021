import { metadatamap, tftools, deletedatamap, savedatamap, asyncselfldsmap } from "../constants/TFTools";
import mockDataMapper from "../../app/metadata/_mockDataMap";
import mockAutoCompleteMap from "../../app/metadata/_mockAutoCompleteMap";
import * as metaData from "../../app/metadata/_metaData";
import { generateUrl } from "bsiuilib";
import { authCodeauthNamerenderer, taxTypeCodeNamerenderer, courtesyRenderer } from "../../app/metadata/cellsrenderer";
import store from "../../tf_index";
/**
 * buildModuleAreaLinks
 * @param {*} apps
 */
export function buildModuleAreaLinks(apps) {
  let premTFtools = [];
  apps.forEach(function (app) {
    if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
      app.accessIds.forEach(function (access) {
        if (access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" && access.visible == true) {
          premTFtools = tftools.filter(tftool => {
            if (app.permissions.hasOwnProperty(tftool.value) && tftool.link == true) return tftool;
          });
        }
      });
    }
  });
  return premTFtools;
}
/**
 * setPerms
 * @param {*} perm
 */
export function setPerms(perm) {
  let appperm = {
    VIEW: perm[0] == 1 ? true : false,
    SAVE: perm[1] == 1 ? true : false,
    DELETE: perm[2] == 1 ? true : false,
    RUN: perm[3] == 1 ? true : false,
    AUDIT: perm[4] == 1 ? true : false
  };
  return appperm;
}
/**
 * openHelp
 * @param {*} pageid
 */
export function openHelp(pageid) {
  window.open("/help/" + pageid, "_blank");
}
/**
 * compMetaData
 * @param {*} pageid
 */
export function compMetaData(pageid, key) {
  if (key >= 0) {
    const { formFilterData } = store.getState();
    const gridMetaData = JSON.parse(JSON.stringify(metaData[pageid][key]));
    if (key === 0 && typeof gridMetaData.pgdef.parentConfig === "string") {
      gridMetaData.pgdef.parentConfig = metaData[gridMetaData.pgdef.parentConfig];
    }
    if (gridMetaData.pgdef.caption) {
      gridMetaData.pgdef.caption = setTemplateData(gridMetaData.pgdef.caption, formFilterData);
    }
    return gridMetaData;
  } else {
    if (metaData[pageid]) {
      let metadata = checkForStaticRender(metaData[pageid]);
      return metadata;
    }
    let metadataMap = metadatamap.find(metadatam => {
      if (pageid == metadatam.id) return metadatam;
    });
    let metadata = checkForStaticRender(metadataMap.metadata);
    return metadata;
  }
}
export function decorateData(griddata, pageid) {
  if (pageid == "taxabilityForAuthority") {
    let state = store.getState();
    let filterData = state.formFilterData;
    console.log(state);
    griddata.forEach(function (value) {
      value.authorityCode = filterData.authorityCode;
    });
    return griddata;
  } else {
    return griddata;
  }
}
export function checkForStaticRender(metadata) {
  metadata.griddef.columns.forEach(function (value) {
    if (value.rendererStaticInput && value.rendererStaticInput == "authCodeauthNamerenderer") {
      value.cellsrenderer = authCodeauthNamerenderer;
    } else if (value.rendererStaticInput && value.rendererStaticInput == "taxTypeCodeNamerenderer") {
      value.cellsrenderer = taxTypeCodeNamerenderer;
    } else if (value.rendererStaticInput && value.rendererStaticInput == "courtesyRenderer") {
      value.cellsrenderer = courtesyRenderer;
    }
  });
  return metadata;
}
/**
 * compPermissions
 * @param {*} pid
 */
export function compPermissions(pid) {
  let perms = getAllRights();
  if (perms.hasOwnProperty(pid)) {
    return setPerms(perms[pid]);
  }
}
/**
 * compURL
 * @param {*} pageid
 */
export function compURL(pageid) {
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(metadataMap.url);
  //return url;
  return dataURL(pageid);
}
/*export function compURL(pageid,...params) {
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(metadataMap.url);
  console.log('buildGetRecsUrl >>>');
  var arr = [];
  arr.push('VINIT'); 
  let dataset ='Vinit123'
  console.log(format(url,dataset));
  return url;
};*/

/**
 * dataURL
 */
function dataURL(pageid) {
  let gridDataUrl;
  switch (pageid) {
    case "allBSIPlans":
      gridDataUrl = "./ALL_BSI_PLANS_MOCKDATA.json";
      break;
    case "customPayments":
      gridDataUrl = "./CUSTOM_PAYMENTS_MOCKDATA.json";
      break;
    case "customTaxCodes":
      gridDataUrl = "./CUSTOM_TAX_PAYMENT_MOCKDATA.json";
      break;
    case "populateV3States":
      gridDataUrl = "./POPULATE_V3_STATES_MOCKDATA.json";
      break;
    case "experienceRates":
      gridDataUrl = "./EXPERIENCE_RATES_MOCKDATA.json";
      break;
    case "supplementalMethods":
      gridDataUrl = "./SUPPLEMENTAL_METHODS_MOCKDATA.json";
    case "customForumulas":
      gridDataUrl = "./CUSTOM_FORMULAS_MOCKDATA.json";
    case "worksites":
      gridDataUrl = "./COMPANIES_MOCKDATA.json";
    default:
      break;
  }
  return gridDataUrl;
}

/**
 * format
 * @param {*} fmt
 * @param  {...any} args
 */
export function format(fmt, ...args) {
  if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
    throw new Error("invalid format string.");
  }
  return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
    if (str) {
      return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
    } else {
      if (index >= args.length) {
        throw new Error("argument index is out of range in format");
      }
      return args[index];
    }
  });
}
/**
 * buildGridDataInput
 * @param {*} pageid
 * @param {*} store
 */
export function buildGridDataInput(pageid, store) {
  let state = store.getState();
  let filterData = state.formFilterData;
  console.log(state);
  let stDate = getStartDate(filterData);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    //companyCode: filterData.companyCode,
    companyCode: getCompanyCode(filterData),
    companyName: filterData.companyName,
    taxCode: filterData.taxCode,
    taxName: filterData.name,
    startdate: stDate,
    riskClass: filterData.riskClass,
    taxType: getTaxType(filterData),
    formNumber: getFormNum(filterData),
    courtesy: filterData.courtesy,
    authCode: getAuthCode(filterData),
    garnishmentGroupCode: filterData.garnishmentGroupCode,
    groupCode: getGroupcode(filterData),
    exemptStat: filterData.exemptionStatus,
    customTaxCode: filterData.customTaxCode === "ALL" ? "" : filterData.customTaxCode,
    pmtUsrCode: getPmtUsrCode(filterData),
    formula: filterData.formula
  };
  return input;
}
export function getAuthCode(filterData) {
  if (filterData && filterData.authorityCode) {
    return filterData.authorityCode;
  } else if (filterData && filterData.bsiAuth) {
    return filterData.bsiAuth;
  }
}
export function getFrmEndDate(filterData) {
  if (filterData && (filterData.startDate || filterData.startdate)) {
    let dt = filterData.endDate ? filterData.endDate : filterData.rescind;
    let newdt = "";
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" + spldt[0];
      return newdt;
    }
  } else {
    return "";
  }
}
export function getFrmStartDate(filterData) {
  if (filterData && (filterData.startDate || filterData.startdate)) {
    let dt = filterData.startDate ? filterData.startDate : filterData.startdate;
    let newdt = "";
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" +spldt[0] ;
      return newdt;
    }
  } else {
    return "";
  }
}
export function getStartDate(filterData){ 
  if(filterData && filterData.includeAllDates){
    return "ALL";
  } else if (filterData && (filterData.startDate || filterData.startdate)) {
    let dt = filterData.startDate ? filterData.startDate.split("-") : filterData.startdate.split("-");
    let stDate = dt[1] + "/" + dt[2] + "/" + dt[0];
    return stDate;
  } else {
    return "";
  }
}
export function getFormNum(filterData) {
  if (filterData && filterData.formNumber) {
    return filterData.formNumber;
  } else if (filterData && filterData.formula) {
    return filterData.formula;
  }
}
export function getTaxType(filterData) {
  if (filterData && filterData.taxType) {
    return filterData.taxType;
  } else if (filterData && filterData.garnishParamTaxType) {
    return filterData.garnishParamTaxType;
  }
}
export function getCompanyCode(filterData) {
  if (filterData && filterData.company) {
    return filterData.company;
  } else if (filterData && filterData.companyCode) {
    return filterData.companyCode;
  }
}
export function getGroupcode(filterData) {
  if (filterData && filterData.groupCode) {
    return filterData.groupCode;
  } else if (filterData && filterData.employeeGroupCode) {
    return filterData.employeeGroupCode;
  }
}
export function getPmtUsrCode(filterData) {
  if (filterData && filterData.typeOfData) {
    return filterData.typeOfData;
  } else if (filterData && filterData.customTypeOfData) {
    return filterData.customTypeOfData;
  }
}

export function buildAutoCompSelInput(pageid, store, patten, formValues = {}) {
  let state = store.getState();
  console.log(state);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    pattern: patten
  };

  return Object.assign(input, formValues);
}
export function buildUsageDataInput(pageid, store, formdata, mode) {
  let state = store.getState();
  console.log("formdata");
  console.log(formdata);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    pmtUsrCode: getUsageUserCode(formdata),
    taxCode: getUsageTaxCode(formdata),
    companyCode: getUsageCompany(formdata),
    companyName: getUsageCompnanyName(formdata),
    usrtax: getUsageDataCode(formdata),
    groupCode: getUsageCode(formdata),
    groupName: formdata.groupName
  };
  return input;
}
export function getUsageCode(formdata) {
  if (formdata && formdata.id) {
    return formdata.company;
  } else if (formdata && formdata.code) {
    return formdata.code;
  }
}

export function getUsageCompany(formdata) {
  if (formdata && formdata.company) {
    return formdata.company;
  }
}
export function getUsageCompnanyName(formdata) {
  if (formdata && formdata.companyName) {
    return formdata.companyName;
  }
}
export function getUsageTaxCode(formdata) {
  if (formdata && formdata.taxCode) {
    return formdata.taxCode;
  }
}
export function getUsageUserCode(formdata) {
  if (formdata && formdata.userCode) {
    return formdata.userCode;
  }
}
export function getUsageDataCode(formdata) {
  if (formdata && formdata.code) {
    return formdata.code;
  }
}
export function buildDeleteInput(pageid, store, formdata, mode) {
  let state = store.getState();
  console.log("formdata");
  console.log(formdata);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    compCode:getCode(formdata),
    taxCode:formdata.taxCode,
    taxName:formdata.name,
    code:getCode(formdata),
    name:getName(formdata),
    startDate:getFrmStartDate(formdata)
  };
  return input;
}
export function buildSaveInput(pageid, store, formdata, mode) {
  let state = store.getState();
  console.log(formdata);
  let editMode = 0;
  if (mode === "New") {
    editMode = 1;
  } else if (mode === "Edit") {
    editMode = 2;
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    editMode: editMode,
    code:getCode(formdata),
    name:getName(formdata),
    fein:formdata.fein,
    courtesy:formdata.courtesy,
    payCode:formdata.userCode,
    payType:formdata.payType,
    payName:formdata.name,
    e_taxability:formdata.taxability,
    e_maxLimit:formdata.eemax,
    taxCode:formdata.taxCode,
    taxName:formdata.name,
    calcMethod: formdata.cmName,
    flatAmount: formdata.flatAmount,
    maxTax:formdata.maxTax,
    maxWage:formdata.maxWage,
    minWage:formdata.minWage,
    endDate:getFrmEndDate(formdata),
    rounding:formdata.roundingDisplay,
    roundingDisplay:formdata.roundingDisplay,
    startDate:getFrmStartDate(formdata),
    taxRate:formdata.taxRate
  };
  return input;
}

export function getCode(formdata){
  if(formdata && formdata.company){
    return formdata.company;
  } else if (formdata && formdata.code) {
    return formdata.code;
  } else if (formdata && formdata.id) {
    return formdata.id;
  }
}
export function getName(formdata) {
  if (formdata && formdata.companyName) {
    return formdata.companyName;
  } else if (formdata && formdata.name) {
    return formdata.name;
  } else if (formdata && formdata.groupName) {
    return formdata.groupName;
  }
}
export const reqInfo = data => {
  let info = {};
  if (isMock()) {
    info = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
  } else {
    info = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
  }
  return info;
};

export function getUrl(id) {
  let metadataMap = metadatamap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(metadataMap.url);
  if (isMock()) {
    // for webpack generated mock data
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      // For custom generated mock data
      metadataMap = mockdatamap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = metadataMap.url;
    }
  }
  console.log("View URL %s for page %s", url, id);
  return url;
}

export function deleteUrl(id) {
  let deldataMap = deletedatamap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(deldataMap.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let deldataMap = mockdelmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = deldataMap.url;
    }
  }
  console.log("Delete URL %s for page %s", url, id);
  return url;
}

export function saveUrl(id) {
  let saveDataMap = savedatamap.find(metadatam => {
    console.log(id, metadatam.id);
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(saveDataMap.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let saveDataMap = mocksavmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = saveDataMap.url;
    }
  }
  console.log("Save URL %s for page %s", url, id);
  return url;
}

export function autocompleteURL(id) {
  let autoCompleteDataMap = asyncselfldsmap.find(metadatam => {
    console.log(id, metadatam.id);
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(autoCompleteDataMap.url);
  if (isMock()) {
    if (mockAutoCompleteMap[id]) {
      url = mockAutoCompleteMap[id];
    } else {
      autoCompleteDataMap = mockselectmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = autoCompleteDataMap.url;
    }
  }
  console.log("Save URL %s for page %s", url, id);
  return url;
}

export const setTemplateData = (str, data) => {
  const regex = /\${(.*?)}/gi;
  const matches = str.match(regex);
  if (matches) {
    matches.forEach(match => {
      const regexObj = new RegExp(/\${(.*?)}/, "gi");
      const fieldMatches = regexObj.exec(match);
      if (fieldMatches && fieldMatches[1]) {
        str = str.replace(match, data[fieldMatches[1]]);
      }
    });
  }
  return str;
};

const mockdelmap = [
  { id: "customPayments", url: "./DELETE_CUSTOM_PAYMENT.json" },
  { id: "customTaxCodes", url: "./DELETE_CUSTOM_TAX_CODE.json" }
];
const mocksavmap = [
  { id: "customPayments", url: "./SAVE_CUSTOM_PAYMENT.json" },
  { id: "customTaxCodes", url: "./SAVE_CUSTOM_TAX_CODE.json" },
  { id: "experienceRates", url: "./SAVE_EXPERIENCE_RATES_MOCKDATA.json" },
  { id: "supplementalMethods", url: "SAVE_SUPPLEMENTAL_METHODS_MOCKDATA.json" },
  { id: "customFormulas", url: "./SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json" },
  { id: "customTaxFormulas", url: "./SAVE_CUSTOM_TAX_FORMULAS_MOCKDATA.json" },
  { id: "companies", url: "./SAVE_COMPANIES_MOCKDATA.json" },
  { id: "worksites", url: "./SAVE_WORKSITE_MOCKDATA.json" },
  { id: "worksiteCompanies", url: "./SAVE_WORKSITE_COMPANIE_MOCKDATA.json" }
];
const mockdatamap = [
  { id: "sampleDateFields", url: "./DATE_FIELD_DOC_MOCKDATA.json" },
  { id: "customFormulas", url: "./CUSTOM_TAX_PAYMENT_MOCKDATA.json" },
  { id: "customTaxFormulas", url: "./CUSTOM_TAX_FORMULAS_MOCKDATA.json" },
  { id: "companies", url: "./COMPANIES_MOCKDATA.json" },
  { id: "worksites", url: "./COMPANIES_MOCKDATA.json" },
  { id: "worksiteCompanies", url: "./WORKSITES_MOCKDATA.json" },
  { id: "recentUsage", url: "./RECENT_USAGE.json" },
  { id: "selectSamplePage", url: "./RECENT_USAGE.json" }
];

//all for test autoComplete
const mockselectmap = [];
