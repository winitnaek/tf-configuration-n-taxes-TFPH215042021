import {appError, getAdminErrorMessage}  from "bsiuilib";
import {getUrl, reqInfo} from "../../base/utils/tfUtils";

class mappingToolUsageAPI {
  static getToolUsage(pageid, mappedTool) {
    let url = getUrl(pageid);
    let tt = JSON.stringify(mappedTool);
    return fetch(url, reqInfo(tt))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to get Grid Data Records. " + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
}

export default mappingToolUsageAPI;