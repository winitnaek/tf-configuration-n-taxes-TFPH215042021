import { metadatamap, tftools, deletedatamap, savedatamap } from "../constants/TFTools";
import URLUtils from '../utils/urlUtils';
const MOCK = true;
/**
 * buildModuleAreaLinks
 * @param {*} apps
 */
export function buildModuleAreaLinks(apps) {
  let premTFtools = [];
  apps.forEach(function(app) {
    if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
      app.accessIds.forEach(function(access) {
        if (
          access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" &&
          access.visible == true
        ) {
          premTFtools = tftools.filter(tftool => {
            if (
              app.permissions.hasOwnProperty(tftool.value) &&
              tftool.link == true
            )
              return tftool;
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
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  return metadataMap.metadata;
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
  let url = URLUtils.buildURL(metadataMap.url);
  //return url;
  return dataURL(pageid);
}
/*export function compURL(pageid,...params) {
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let url = URLUtils.buildURL(metadataMap.url);
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
function dataURL(pageid){
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
      throw new Error('invalid format string.');
  }
  return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
      if (str) {
          return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
      } else {
          if (index >= args.length) {
              throw new Error('argument index is out of range in format');
          }
          return args[index];
      }
  });
};
/**
 * buildGridDataInput
 * @param {*} pageid 
 * @param {*} store 
 */
export function buildGridDataInput(pageid, store) {
  let state = store.getState();
  let filterData = state.formFilterData;
  console.log(state);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    companyCode: filterData.companyCode,
    taxCode: 'FDSFSDF',//filterData.taxCode,
    taxName:'FDSFSDF - sdfsdf sdfsdfsdfsdfsdf',
    startdate: filterData.startdate,
    riskClass: filterData.riskClass,
    taxType: filterData.taxType,
    formNumber: filterData.formNumber
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
export function buildSaveInput(pageid, store) {
  let state = store.getState();
  let filterData = state.formSaveData;
  console.log(state);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId()
  };
  return input;
}
export const reqInfo = data => {
    let info = {};
    if (MOCK) {
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
    let url = URLUtils.buildURL(metadataMap.url);
    if (MOCK) {
      let metadataMap = mockdatamap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = metadataMap.url;
    }
    console.log("View URL %s for page %s", url,id);
    return url;
  }

  export function deleteUrl(id) {
    let deldataMap = deletedatamap.find(metadatam => {
      if (id == metadatam.id) return metadatam;
    });
    let url = URLUtils.buildURL(deldataMap.url);
    if (MOCK) {
      let deldataMap = mockdelmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = deldataMap.url;
    }
    console.log("Delete URL %s for page %s", url,id);
    return url;
  }

  export function saveUrl(id) {
    let saveDataMap = deletedatamap.find(metadatam => {
      if (id == metadatam.id) return metadatam;
    });
    let url = URLUtils.buildURL(saveDataMap.url);
    if (MOCK) {
      let saveDataMap = mocksavmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = saveDataMap.url;
    }
    console.log("Save URL %s for page %s", url,id);
    return url;
  }
  const mockdelmap = [
    {id: "customPayments",url: './DELETE_CUSTOM_PAYMENT.json'},
    {id: "customTaxCodes",url: './DELETE_CUSTOM_TAX_CODE.json'}
  ];
  const mocksavmap = [
    {id: "customPayments",url: './SAVE_CUSTOM_PAYMENTS.json'},
    {id: "customTaxCodes",url: './SAVE_CUSTOM_TAX_CODE.json'}
  ];
  const mockdatamap = [
    {id: "customPayments",url: './CUSTOM_PAYMENTS_MOCKDATA.json'},
    {id: "customTaxCodes",url: './CUSTOM_TAX_PAYMENT_MOCKDATA.json'},
    {id: "allBSIPlans",url: './ALL_BSI_PLANS_MOCKDATA.json'},
    {id: "populateV3States",url: './POPULATE_V3_STATES_MOCKDATA.json'},
    {id: "experienceRates",url: './EXPERIENCE_RATES_MOCKDATA.json'},
    {id: "supplementalMethods",url: 'SUPPLEMENTAL_METHODS_MOCKDATA.json'},
    {id: "customFormulas", url: './CUSTOM_TAX_PAYMENT_MOCKDATA.json'},
    {id: "customTaxFormulas", url: './CUSTOM_TAX_FORMULAS_MOCKDATA.json'},
    {id: "companies", url: './COMPANIES_MOCKDATA.json'},
    {id: "worksites", url: './COMPANIES_MOCKDATA.json'},
    {id: "worksiteCompanies", url: './WORKSITES_MOCKDATA.json'},
    {id: "recentUsage",url: './RECENT_USAGE.json'},
  ];