//import {metadatamap} from "../../base/constants/ApiConstants";
import URLUtils from "../../base/utils/urlUtils";
import { metadatamap, tftools } from "../../base/constants/TFTools";
const MOCK = true;

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
    console.log("Seperate ", url);
    return url;
  }

  const mockdatamap = [
    {id: "customPayments",url: './CUSTOM_PAYMENTS_MOCKDATA.json'},
    {id: "customTaxCodes",url: './CUSTOM_TAX_PAYMENT_MOCKDATA.json'},
    {id: "allBSIPlans",url: './ALL_BSI_PLANS_MOCKDATA.json'},
    {id: "populateV3States",url: './POPULATE_V3_STATES_MOCKDATA.json'},
    {id: "experienceRates",url: './EXPERIENCE_RATES_MOCKDATA.json'},
    {id: "supplementalMethods",url: 'SUPPLEMENTAL_METHODS_MOCKDATA.json'},
    {id: "recentUsage",url: './RECENT_USAGE.json'},
  ];