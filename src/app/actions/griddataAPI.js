import * as svcs from "../../base/constants/ServiceUrls";
import URLUtils from "../../base/utils/urlUtils";
import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import { metadatamap, tftools } from "../../base/constants/TFTools";
const MOCK = true;
class griddataAPI {
  static getGridData(pageid, getGridDataInput) {
    let url = griddataAPI.getUrl(pageid);
    let tt = JSON.stringify(getGridDataInput);
    return fetch(url, reqInfo(tt))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to get Grid Data Records. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
  static getUrl(pageid) {
    let metadataMap = metadatamap.find(metadatam => {
      if (pageid == metadatam.id) return metadatam;
    });
    let url = URLUtils.buildURL(metadataMap.url);
    if (MOCK) {
      let metadataMap = mockdatamap.find(metadatam => {
        if (pageid == metadatam.id) return metadatam;
      });
      url = metadataMap.url;
    }
    return url;
  }
}
const reqInfo = data => {
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
const mockdatamap = [
  {id: "customPayments",url: './CUSTOM_PAYMENTS_MOCKDATA.json'},
  {id: "customTaxCodes",url: './CUSTOM_TAX_PAYMENT_MOCKDATA.json'},
  {id: "allBSIPlans",url: './ALL_BSI_PLANS_MOCKDATA.json'},
  {id: "populateV3States",url: './POPULATE_V3_STATES_MOCKDATA.json'},
  {id: "experienceRates",url: './EXPERIENCE_RATES_MOCKDATA.json'},
  {id: "supplementalMethods",url: 'SUPPLEMENTAL_METHODS_MOCKDATA.json'},
  {id: "customFormulas", url: './CUSTOM_FORMULAS_MOCKDATA.json'}
];
export default griddataAPI;