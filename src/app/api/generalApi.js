import * as svcs from "../../base/constants/ServiceUrls";
import URLUtils from "../../base/utils/urlUtils";
import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {metadatamap} from "../../base/constants/ApiConstants";

const MOCK = true;
class GeneralApi {
  static getApiData(id) {
    let url = GeneralApi.getUrl(id);
    return fetch(url, reqInfo(null))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to get Data Records. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
  static getUrl(id) {
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
  {id: "recentUsage",url: './RECENT_USAGE.json'},
];
export default GeneralApi;