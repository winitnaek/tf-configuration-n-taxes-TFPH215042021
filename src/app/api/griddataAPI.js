import * as svcs from "../../base/constants/ServiceUrls";
import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {getUrl, reqInfo} from "../../base/utils/BuildUrl";

class griddataAPI {
  static getGridData(pageid, getGridDataInput) {
    let url = getUrl(pageid);
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
}

export default griddataAPI;