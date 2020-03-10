import * as svcs from "../../base/constants/ServiceUrls";
import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {getUrl, reqInfo} from "../../base/utils/tfUtils";

class GeneralApi {
  static getApiData(id) {
    let url = getUrl(id);
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
}

export default GeneralApi;