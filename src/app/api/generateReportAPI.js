import {appError, getAdminErrorMessage}  from "bsiuilib";
import {generateReportUrl, reqInfo,buildSaveInput} from "../../base/utils/tfUtils";

class generateReportApi {
  static generate(pageid, data) {
    let url = generateReportUrl(pageid);
    let tt = JSON.stringify(data);
    return fetch(url, reqInfo(tt))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to Save Grid Data Record." + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch((error) => {
        return error;
      });
  }
}

export default generateReportApi;