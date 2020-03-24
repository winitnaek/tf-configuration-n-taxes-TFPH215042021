import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {deleteUrl, reqInfo} from "../../base/utils/tfUtils";

class deletegriddataAPI {
  static deleteGridData(pageid, data) {
    let url = deleteUrl(pageid);
    let tt = JSON.stringify(data);
    return fetch(url, reqInfo(tt))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to Delete Grid Data Record. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
}

export default deletegriddataAPI;