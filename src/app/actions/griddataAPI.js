import * as svcs from "../../base/constants/ServiceUrls";
import URLUtils from "../../base/utils/urlUtils";
import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import { metadatamap, tftools } from "../../base/constants/TFTools";
class griddataAPI {
  static getGridData(pageid, getGridDataInput) {
    let url = griddataAPI.getUrl(pageid);
    let tt = JSON.stringify(getGridDataInput);
    return fetch(url, {
      method: "POST",
      body: tt,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
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
    return URLUtils.buildURL(metadataMap.url);
  }
}
export default griddataAPI;