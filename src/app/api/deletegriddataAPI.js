import {appError, getAdminErrorMessage}  from "bsiuilib";
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
          var errorMsg = "Unable to Delete Grid Data Record. " + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
}

export default deletegriddataAPI;