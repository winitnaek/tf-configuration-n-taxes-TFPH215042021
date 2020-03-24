import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {saveUrl, reqInfo} from "../../base/utils/tfUtils";

class savegriddataAPI {
  static saveGridData(pageid, data, mode) {
    let url = saveUrl(pageid);
    let tt = JSON.stringify(data);
    return fetch(url, reqInfo(tt), mode)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to Save Grid Data Record. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
}

export default savegriddataAPI;