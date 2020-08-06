import { metadatamap, tftools, deletedatamap, savedatamap, asyncselfldsmap } from "../constants/TFTools";
import mockDataMapper from "../../app/metadata/_mockDataMap";
import mockAutoCompleteMap from "../../app/metadata/_mockAutoCompleteMap";
import * as metaData from "../../app/metadata/_metaData";
import { generateUrl } from "bsiuilib";
import {authCodeauthNamerenderer,taxTypeCodeNamerenderer} from '../../app/metadata/cellsrenderer';
import store from '../../tf_index';
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
export function compMetaData(pageid) {
  if (metaData[pageid]) {
    let metadata = checkForStaticRender(metaData[pageid])
    return metadata;
  }
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let metadata = checkForStaticRender(metadataMap.metadata)
  return metadata;
}
export function decorateData(griddata,pageid){
  if(pageid=='taxabilityForAuthority'){
    let state = store.getState();
    let filterData = state.formFilterData;
    console.log(state);
    griddata.forEach(function (value) {
      value.authorityCode = filterData.authorityCode;
    });
    return griddata
  }else{
    return griddata
  }
  
}
export function checkForStaticRender(metadata) {
  metadata.griddef.columns.forEach(function (value) {
    if (value.rendererStaticInput && value.rendererStaticInput == 'authCodeauthNamerenderer') {
      value.cellsrenderer = authCodeauthNamerenderer;
    } else if (value.rendererStaticInput && value.rendererStaticInput == 'taxTypeCodeNamerenderer') {
      value.cellsrenderer = taxTypeCodeNamerenderer;
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
  let stDate = "";
  if (filterData.startDate) {
    let dt = filterData.startDate.split("-");
    stDate = dt[1] + "/" + dt[2] + "/" + dt[0];
  }

  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    //companyCode: filterData.companyCode,
    companyCode: filterData.company,
    companyName: filterData.companyName,
    taxCode: filterData.taxCode,
    taxName: filterData.name,
    startdate: stDate,
    riskClass: filterData.riskClass,
    taxType: filterData.taxType,
    formNumber: filterData.formNumber,
    courtesy: filterData.courtesy,
    authCode: filterData.authorityCode,
    garnishmentGroupCode:filterData.garnishmentGroupCode,
    groupCode:filterData.groupCode,
    exemptStat:filterData.exemptionStatus,
    customTaxCode:(filterData.customTaxCode ==="ALL"?"":filterData.customTaxCode),
    pmtUsrCode:getPmtUsrCode(filterData)
  };
  return input;
}
export function getPmtUsrCode(filterData){
  if(filterData && filterData.typeOfData){
    return filterData.typeOfData;
  }else if(filterData && filterData.customTypeOfData){
    return filterData.customTypeOfData;
  }
}

export function buildAutoCompSelInput(pageid, store, patten) {
  let state = store.getState();
  console.log(state);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    pattern: patten
  };
  return input;
}
export function buildDeleteInput(pageid, store) {
  let state = store.getState();
  let filterData = state.formDeleteData;
  console.log(state);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId()
  };
  return input;
}
export function buildSaveInput(pageid, store, formdata, mode) {
  let state = store.getState();
  let filterData = state.formSaveData;
  console.log("buildSaveInput state");
  console.log(state);
  console.log("buildSaveInput filterData");
  console.log(filterData);
  console.log("buildSaveInput formdata");
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
    taxCode: formdata.taxCode,
    taxName: formdata.name
  };
  return input;
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
